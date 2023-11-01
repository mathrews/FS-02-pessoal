import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { API } from "../../../service";

const PageUsers = () => {
    const [visibleCreate, setVisibleCreate] = useState(false);

    const [users, setUsers] = useState();

    const fetchUsers = async () => {
        try {
            const response = await API.get("users");
            setUsers(response.data);
        } catch (error) {
            alert('Erro:', error.message)
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            <div className={"w-full flex justify-content-between mb-4"}>
                <h1>Usuarios</h1>
                <Button onClick={() => setVisibleCreate(true)}>Novo Usuário</Button>
            </div>

            <DataTable
                value={users}
                paginator
                rows={5}
                showGridlines
                rowsPerPageOptions={[5, 10, 25, 50]}
                tableStyle={{ minWidth: "50rem" }}>
                <Column
                    field="id"
                    header="Id"></Column>
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
