import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";
import { useProductCreate, useProductDelete, useProducts } from "../../../hooks/useProducts";
import { useForm } from "react-hook-form";
import { InputText } from "primereact/inputtext";

const PageProducts = () => {
    const [visibleCreate, setVisibleCreate] = useState(false);

    const {
        register: createData,
        handleSubmit: createSubmit,
        reset: createReset,
    } = useForm();

    const { data: products } = useProducts();
    const productCreate = useProductCreate();
    const productDelete = useProductDelete();

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
                tableStyle={{ minWidth: "40rem" }}>
                <Column
                    field="id"
                    header="Id"></Column>
                <Column
                    field="name"
                    header="Nome"></Column>
                <Column
                    field="categorie"
                    header="Categoria"></Column>
                <Column
                    field="price"
                    header="Preço"></Column>
                <Column
                    field="ref"
                    header="REF"></Column>
                <Column
                    header={"Ações"}
                    bodyClassName={"w-1"}
                    body={(rowData) => (
                        <div className="flex gap-3">
                            <Button
                                rounded
                                icon={"pi pi-pencil"}
                            />
                            <Button
                                rounded
                                icon={"pi pi-trash"}
                                onClick={() => deleteProduct(rowData.id)}
                            />
                        </div>
                    )}
                />
            </DataTable>

            <Sidebar
                visible={visibleCreate}
                onHide={() => setVisibleCreate(false)}
                position={"right"}>
                <h1 className="mb-3">Novo usuário:</h1>
                <form onSubmit={createSubmit(createProduct)}>
                    
                    <label
                        className="block mb-1"
                        htmlFor="name">
                        Nome
                    </label>
                    <InputText
                        className="w-full mb-3"
                        type="text"
                        id="name"
                        placeholder="Digite seu nome"
                        {...createData("name", { required: true })}
                    />

                    <label
                        className="block mb-1"
                        htmlFor="email">
                        Categoria
                    </label>
                    <InputText
                        className="w-full mb-3"
                        type="text"
                        id="email"
                        placeholder="Digite sua categoria"
                        {...createData("category", { required: true })}
                    />

                    <label
                        className="block mb-1"
                        htmlFor="Preço">
                        Preço
                    </label>
                    <InputText
                        className="w-full mb-3"
                        type="text"
                        id="preço"
                        placeholder="Digite o preço"
                        {...createData("price", { required: true })}
                    />

                    <label
                        className="block mb-1"
                        htmlFor="ref">
                        REF
                    </label>
                    <InputText
                        className="w-full mb-3"
                        type="text"
                        id="ref"
                        placeholder="Digite a ref do produto"
                        {...createData("ref", { required: true })}
                    />

                    <Button
                        label="Salvar"
                        type="submit"
                        className="w-full mt-3"
                    />

                </form>
            </Sidebar>
        </>
    );
};

export default PageProducts;