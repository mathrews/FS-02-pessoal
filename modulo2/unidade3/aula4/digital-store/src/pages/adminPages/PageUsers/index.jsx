import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { useRef, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
    useUserCreate,
    useUserDelete,
    useUserUpdate,
    useUsers,
} from "../../../hooks/useUsers";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { useForm } from "react-hook-form";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";

const PageUsers = () => {
    const toast = useRef(null);
    const [visibleCreate, setVisibleCreate] = useState(false);
    const [visibleEdit, setVisibleEdit] = useState(false);

    const {
        register: createData,
        handleSubmit: createSubmit,
        setValue: createValue,
        reset: createReset,
    } = useForm({
        defaultValues: {
            user_level: 1,
        },
    });

    const [levelSelected, setLevelSelected] = useState(1);

    const { data: usuarios } = useUsers();
    const userCreate = useUserCreate();
    const userDelete = useUserDelete();
    const userUpdate = useUserUpdate();

    const {
        register: editData,
        handleSubmit: editSubmit,
        reset: editReset,
        setValue: editValue,
    } = useForm();

    const createUser = (data) => {
        userCreate.mutateAsync(data, {
            onSuccess: (response) => {
                toast.current.show({
                    severity: response.type,
                    detail: response.message,
                });
            },
            onError: (response) => {
                toast.current.show({
                    severity: response.type,
                    detail: response.message,
                });
            },
        });
        createReset();
        setVisibleCreate(false);
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
            accept: () => {
                userDelete.mutateAsync(id, {
                    onSuccess: (response) => {
                        console.log("response", response);
                        toast.current.show({
                            severity: response.type,
                            detail: response.message,
                        });
                    },
                    onError: (response) => {
                        toast.current.show({
                            severity: response.type,
                            detail: response.message,
                        });
                    },
                });
            },
            reject,
            acceptLabel: "Sim",
            rejectLabel: "Não",
        });
    };

    return (
        <>
            <div className={"w-full flex justify-content-between mb-4"}>
                <h1>Usuarios</h1>
                <Button onClick={() => setVisibleCreate(true)}>
                    Novo Usuário
                </Button>
            </div>

            <DataTable
                value={usuarios}
                paginator
                loading={userCreate.isLoading}
                rows={5}
                showGridlines
                rowsPerPageOptions={[5, 10, 25, 50]}
                tableStyle={{ minWidth: "40rem" }}
            >
                <Column field="user_id" header="Id"></Column>
                <Column field="user_name" header="Nome"></Column>
                <Column field="user_email" header="Email"></Column>
                <Column
                    field="user_level"
                    header="Nivel"
                    body={(rowData) => (
                        <div className="bg-primary border-round text-light inline-block p-2">
                            {rowData.user_level === 1 ? "Usuario" : "Admin"}
                        </div>
                    )}
                ></Column>
                <Column
                    header={"Ações"}
                    bodyClassName={"w-1"}
                    body={(rowData) => (
                        <div className="flex gap-3">
                            <Button
                                rounded
                                icon={"pi pi-pencil"}
                                onClick={() => {
                                    editValue('user_id', rowData.user_id)
                                    editValue('user_name', rowData.user_name)
                                    editValue('user_email', rowData.user_email)
                                    setLevelSelected('user_level', rowData.user_level)
                                    setVisibleEdit(true);
                                }}
                            />
                            <Button
                                rounded
                                icon={"pi pi-trash"}
                                onClick={() => {
                                    console.log(rowData)
                                    confirm(rowData.user_id);
                                }}
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
                <h1 className="mb-3">Novo usuário:</h1>
                <form onSubmit={createSubmit(createUser)}>
                    <label className="block mb-1" htmlFor="name">
                        Nome
                    </label>
                    <InputText
                        className="w-full mb-3"
                        type="text"
                        id="name"
                        placeholder="Digite seu nome"
                        {...createData("user_name", { required: true })}
                    />
                    <label className="block mb-1" htmlFor="email">
                        Email
                    </label>
                    <InputText
                        className="w-full mb-3"
                        type="text"
                        id="email"
                        placeholder="Digite seu email"
                        {...createData("user_email", { required: true })}
                    />
                    <label className="block mb-1" htmlFor="password">
                        Senha
                    </label>
                    <InputText
                        className="w-full mb-3"
                        type="password"
                        id="password"
                        placeholder="Digite sua senha"
                        {...createData("user_password", { required: true })}
                    />
                    <label className="block mb-1" htmlFor="level">
                        Level
                    </label>
                    <Dropdown
                        value={levelSelected}
                        onChange={(e) => {
                            setLevelSelected(e.target.value);
                            createValue("user_level", e.target.value);
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
                position={"right"}
            >
                <h1 className="mb-3">Editar usuário:</h1>
                <form onSubmit={editSubmit(updateUser)}>
                    <label className="block mb-1" htmlFor="name">
                        Nome
                    </label>
                    <InputText
                        className="w-full mb-3"
                        type="text"
                        id="name"
                        placeholder="Digite seu nome"
                        {...editData("user_name", { required: true })}
                    />
                    <label className="block mb-1" htmlFor="email">
                        Email
                    </label>
                    <InputText
                        className="w-full mb-3"
                        type="text"
                        id="email"
                        placeholder="Digite seu email"
                        {...editData("user_email", { required: true })}
                    />
                    <label className="block mb-1" htmlFor="email">
                        Password
                    </label>
                    <InputText
                        className="w-full mb-3"
                        type="text"
                        id="password"
                        placeholder="Digite seu password"
                        autoComplete="new-password"
                        {...editData("user_password", { required: true })}
                    />
                    <label className="block mb-1" htmlFor="level">
                        Level
                    </label>
                    <Dropdown
                        value={levelSelected}
                        onChange={(e) => {
                            setLevelSelected(e.value);
                            editValue("user_level", e.value);
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
