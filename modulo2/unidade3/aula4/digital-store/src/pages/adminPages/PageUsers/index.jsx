import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { useRef, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useUserCreate, useUserDelete, useUserUpdate, useUsers } from "../../../hooks/useUsers";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { useForm } from "react-hook-form";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";

const PageUsers = () => {
    const [visibleCreate, setVisibleCreate] = useState(false);
    const [visibleEdit, setVisibleEdit] = useState(false);

    const {
        register: createData,
        handleSubmit: createSubmit,
        setValue: createValue,
        reset: createReset,
    } = useForm({
        defaultValues: {
            level: 1,
        },
    });

    const [levelSelected, setLevelSelected] = useState("1");

    const { data: usuarios } = useUsers();
    const userCreate = useUserCreate();
    const userDelete = useUserDelete();
    const userUpdate = useUserUpdate();

    const { register: editData, handleSubmit: editSubmit, reset: editReset, setValue: editValue } = useForm();

    const createUser = (data) => {
        try {
            userCreate.mutateAsync(data);
            createReset();
            setVisibleCreate(false);
        } catch (error) {
            console.log(error.message);
        }
    };

    const deleteUser = (id) => {
        try {
            userDelete.mutateAsync(id);
        } catch (error) {
            console.log(error.message);
        }
    };

    const updateUser = (data) => {
        try {
            console.log(data);
            userUpdate.mutateAsync(data);
            editReset();
            setVisibleEdit(false);
        } catch (error) {
            console.log(error.message);
        }
    };

    const toast = useRef(null);
    const accept = (id) => {
        deleteUser(id);
        toast.current.show({
            severity: "info",
            detail: "Item deletado com sucesso!",
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
            message: "Deseja realmente apagar este item?",
            accept: () => accept(id),
            reject,
            acceptLabel: "Sim",
            rejectLabel: "Não",
        });
    };

    return (
        <>
            <div className={"w-full flex justify-content-between mb-4"}>
                <h1>Usuarios</h1>
                <Button
                    onClick={() => setVisibleCreate(true)}>
                    Novo Usuário
                </Button>
            </div>

            <DataTable
                value={usuarios}
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
                    field="email"
                    header="Email"></Column>
                <Column
                    field="level"
                    header="Nivel"
                    body={(rowData) => (
                        <div className="bg-primary border-round text-light inline-block p-2">
                            {rowData.level === 1 ? "Usuario" : "Admin"}
                        </div>
                    )}></Column>
                <Column
                    header={"Ações"}
                    bodyClassName={"w-1"}
                    body={(rowData) => (
                        <div className="flex gap-3">
                            <Button
                                rounded
                                icon={"pi pi-pencil"}
                                onClick={() => {
                                    setVisibleEdit(true);
                                }}
                            />
                            <Button
                                rounded
                                icon={"pi pi-trash"}
                                onClick={async () => {
                                    confirm(rowData.id);
                                }}
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
                <form onSubmit={createSubmit(createUser)}>
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
                        Email
                    </label>
                    <InputText
                        className="w-full mb-3"
                        type="text"
                        id="email"
                        placeholder="Digite seu email"
                        {...createData("email", { required: true })}
                    />
                    <label
                        className="block mb-1"
                        htmlFor="level">
                        Level
                    </label>
                    <Dropdown
                        value={levelSelected}
                        onChange={(e) => {
                            setLevelSelected(e.value);
                            createValue("level", e.value);
                        }}
                        className={"w-full"}
                        options={[
                            {
                                level: "User",
                                value: 1,
                            },
                            {
                                level: "Admin",
                                value: 2,
                            },
                        ]}
                        optionLabel="level"
                        optionValue="value"
                        placeholder="Select a Level"
                    />
                    <Button
                        label="Salvar"
                        type="submit"
                        className="w-full mt-3"
                    />
                </form>
            </Sidebar>

            <Sidebar
                visible={visibleEdit}
                onHide={() => setVisibleEdit(false)}
                position={"right"}>
                <h1 className="mb-3">Editar usuário:</h1>
                <form onSubmit={editSubmit(updateUser)}>
                    <label
                        className="block mb-1"
                        htmlFor="id">
                        Id
                    </label>
                    <InputText
                        className="w-full mb-3"
                        type="text"
                        id="id"
                        placeholder="Digite o Id"
                        {...editData("id", { required: true })}
                    />
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
                        {...editData("name", { required: true })}
                    />
                    <label
                        className="block mb-1"
                        htmlFor="email">
                        Email
                    </label>
                    <InputText
                        className="w-full mb-3"
                        type="text"
                        id="email"
                        placeholder="Digite seu email"
                        {...editData("email", { required: true })}
                    />
                    <label
                        className="block mb-1"
                        htmlFor="level">
                        Level
                    </label>
                    <Dropdown
                        value={levelSelected}
                        onChange={(e) => {
                            setLevelSelected(e.value);
                            editValue("level", e.value);
                        }}
                        className={"w-full"}
                        options={[
                            {
                                level: "User",
                                value: 1,
                            },
                            {
                                level: "Admin",
                                value: 2,
                            },
                        ]}
                        optionLabel="level"
                        optionValue="value"
                        placeholder="Select a Level"
                    />
                    <Button
                        label="Salvar"
                        type="submit"
                        className="w-full mt-3"
                    />
                </form>
            </Sidebar>

            <Toast ref={toast} />
            <ConfirmDialog />
        </>
    );
};

export default PageUsers;
