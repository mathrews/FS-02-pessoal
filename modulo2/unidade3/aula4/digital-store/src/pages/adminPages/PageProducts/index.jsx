import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Sidebar } from "primereact/sidebar";
import { useEffect, useState } from "react";
import { API } from "../../../service";

const PageProducts = () => {
    const [visibleCreate, setVisibleCreate] = useState(false);

    const [products, setProducts] = useState()

    const fetchProducts = async () => {
      try {
        const response = await API.get('products')
        setProducts(response.data)
      } catch (error) {
        alert('Erro:', error.message)
      }
    }

    useEffect(() => {
      fetchProducts()
    }, [])

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
                tableStyle={{ minWidth: "50rem" }}>
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
                    field="rate"
                    header="Rate"></Column>
                <Column
                    field="reviews"
                    header="Reviews"></Column>
                <Column
                    header={"Ações"}
                    bodyClassName={"w-1"}
                    body={() => (
                        <div className="flex gap-3">
                            <Button
                                rounded
                                icon={"pi pi-pencil"}
                            />
                            <Button
                                rounded
                                icon={"pi pi-trash"}
                            />
                        </div>
                    )}
                />
            </DataTable>

            <Sidebar
                visible={visibleCreate}
                onHide={() => setVisibleCreate(false)}
                position={"right"}>
                Something
            </Sidebar>
        </>
    );
};

export default PageProducts;
