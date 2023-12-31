import { Button } from "primereact/button";
import { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useCategories } from "../../../hooks/useCategories";

const PageCategories = () => {
    const [visibleCreate, setVisibleCreate] = useState(false);

    // const [categories, setCategories] = useState();

    // const fetchCategories = async () => {
    //   try {
    //     const response = await API.get("categories");
    //     setCategories(response.data);
    //   } catch (error) {
    //     alert('Erro:', error.message)
    //   }
    // };

    // useEffect(() => {
    //   fetchCategories();
    // }, []);

    const { data: categories } = useCategories();

    return (
        <>
            <div className={"w-full flex justify-content-between mb-4"}>
                <h1>Categorias</h1>
                <Button onClick={() => setVisibleCreate(true)}>Nova Categoria</Button>
            </div>

            <DataTable
                value={categories}
                paginator
                rows={5}
                showGridlines
                rowsPerPageOptions={[5, 10, 25, 50]}
                tableStyle={{ minWidth: "40rem" }}>
                <Column
                    field="shooes"
                    header="Calçados"></Column>
                <Column
                    field="shirts"
                    header="Blusas"></Column>
                <Column
                    field="jackets"
                    header="Casacos"></Column>
                <Column
                    field="pants"
                    header="Calças"></Column>
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

export default PageCategories;
