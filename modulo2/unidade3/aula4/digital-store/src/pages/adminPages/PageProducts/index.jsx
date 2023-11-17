import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Sidebar } from "primereact/sidebar";
import { useRef, useState } from "react";
import {
  useProductCreate,
  useProductDelete,
  useProductUpdate,
  useProducts,
} from "../../../hooks/useProducts";
import { useForm } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";

const PageProducts = () => {
  const [visibleCreate, setVisibleCreate] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);

  const {
    register: createData,
    handleSubmit: createSubmit,
    reset: createReset,
  } = useForm();

  const {
    register: editData,
    handleSubmit: editSubmit,
    reset: editReset,
  } = useForm();

  const { data: products } = useProducts();
  const productCreate = useProductCreate();
  const productDelete = useProductDelete();
  const productEdit = useProductUpdate();

  const createProduct = (data) => {
    try {
      productCreate.mutateAsync(data);
      createReset();
      setVisibleCreate(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteProduct = (id) => {
    try {
      productDelete.mutateAsync(id);
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateUser = (data) => {
    try {
      console.log(data);
      productEdit.mutateAsync(data);
      editReset();
      setVisibleEdit(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const toast = useRef(null);
    const accept = (id) => {
        deleteProduct(id);
        toast.current.show({
            severity: "info",
            detail: "Produto deletado com sucesso!",
            summary: "Confirmed",
        });
    };
    const reject = () => {
        toast.current.show({
            severity: "info",
            detail: "Ação rejeitada.",
            summary: "Rejeitado",
        });
    };

    const confirm = (id) => {
        confirmDialog({
            header: "Atenção",
            message: "Deseja realmente apagar este produto do estoque?",
            accept: () => accept(id),
            reject,
            acceptLabel: "Sim",
            rejectLabel: "Não",
        });
    };

  return (
    <>
      <div className={"w-full flex justify-content-between mb-4"}>
        <h1>Produtos</h1>
        <Button onClick={() => setVisibleCreate(true)}>Novo Produto</Button>
      </div>

      <DataTable
        value={products}
        paginator
        rows={5}
        showGridlines
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "40rem" }}
      >
        <Column field="id" header="Id"></Column>
        <Column field="name" header="Nome"></Column>
        <Column field="categorie" header="Categoria"></Column>
        <Column field="price" header="Preço"></Column>
        <Column field="ref" header="REF"></Column>
        <Column
          header={"Ações"}
          bodyClassName={"w-1"}
          body={(rowData) => (
            <div className="flex gap-3">
              <Button
                rounded
                icon={"pi pi-pencil"}
                onClick={() => setVisibleEdit(true)}
              />
              <Button
                rounded
                icon={"pi pi-trash"}
                onClick={() => confirm(rowData.id)}
              />
            </div>
          )}
        />
      </DataTable>

      <Sidebar
        visible={visibleCreate}
        onHide={() => setVisibleCreate(false)}
        position={"right"}
      >
        <h1 className="mb-3">Novo Produto:</h1>
        <form onSubmit={createSubmit(createProduct)}>
          <label className="block mb-1" htmlFor="name">
            Nome
          </label>
          <InputText
            className="w-full mb-3"
            type="text"
            id="name"
            placeholder="Digite seu nome"
            {...createData("name", { required: true })}
          />

          <label className="block mb-1" htmlFor="email">
            Categoria
          </label>
          <InputText
            className="w-full mb-3"
            type="text"
            id="email"
            placeholder="Digite a categoria"
            {...createData("category", { required: true })}
          />

          <label className="block mb-1" htmlFor="Preço">
            Preço
          </label>
          <InputText
            className="w-full mb-3"
            type="text"
            id="preço"
            placeholder="Digite o preço"
            {...createData("price", { required: true })}
          />

          <label className="block mb-1" htmlFor="ref">
            REF
          </label>
          <InputText
            className="w-full mb-3"
            type="text"
            id="ref"
            placeholder="Digite a ref do produto"
            {...createData("ref", { required: true })}
          />

          <Button label="Salvar" type="submit" className="w-full mt-3" />
        </form>
      </Sidebar>

      <Sidebar
        visible={visibleEdit}
        onHide={() => setVisibleEdit(false)}
        position={"right"}
      >
        <h1 className="mb-3">Editar Produto:</h1>
        <form onSubmit={editSubmit(updateUser)}>
          <label className="block mb-1" htmlFor="name">
            Id
          </label>

          <InputText
            className="w-full mb-3"
            type="text"
            id="name"
            placeholder="Digite o ID do produto"
            {...editData("id", { required: true })}
          />

          <label className="block mb-1" htmlFor="name">
            Nome
          </label>

          <InputText
            className="w-full mb-3"
            type="text"
            id="name"
            placeholder="Digite o nome do produto"
            {...editData("name", { required: true })}
          />

          <label className="block mb-1" htmlFor="email">
            Categoria
          </label>
          <InputText
            className="w-full mb-3"
            type="text"
            id="email"
            placeholder="Digite a categoria"
            {...editData("category", { required: true })}
          />

          <label className="block mb-1" htmlFor="Preço">
            Preço
          </label>
          <InputText
            className="w-full mb-3"
            type="text"
            id="preço"
            placeholder="Digite o preço"
            {...editData("price", { required: true })}
          />

          <label className="block mb-1" htmlFor="ref">
            REF
          </label>
          <InputText
            className="w-full mb-3"
            type="text"
            id="ref"
            placeholder="Digite a ref do produto"
            {...editData("ref", { required: true })}
          />

          <Button label="Salvar" type="submit" className="w-full mt-3" />
        </form>
      </Sidebar>

      <Toast ref={toast} />
      <ConfirmDialog />
    </>
  );
};

export default PageProducts;
