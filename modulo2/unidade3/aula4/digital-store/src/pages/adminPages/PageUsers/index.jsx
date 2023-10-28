import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const PageUsers = () => {
    const [visibleCreate, setVisibleCreate] = useState(false);

    const usuarios = [
        {
            nome: "Gleidson",
            email: "gleidson@gmail.com",
            level: "user",
        },
        {
            nome: "Teteus",
            email: "teteus@gmail.com",
            level: "admin",
        },
    ];

    return (
        <>
            <div className={"w-full flex justify-content-between mb-4"}>
                <h1>Usuarios</h1>
                <Button onClick={() => setVisibleCreate(true)}>Novo Usuário</Button>
            </div>

            <DataTable
                value={usuarios}
                paginator
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 50]}
                tableStyle={{ minWidth: "50rem" }}>
                <Column
                    field="nome"
                    header="Nome"></Column>
                <Column
                    field="email"
                    header="Email"></Column>
                <Column
                    field="level"
                    header="Nivel"></Column>
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

export default PageUsers;
