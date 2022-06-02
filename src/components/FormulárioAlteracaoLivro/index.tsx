import axios from "axios";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, MenuItem, TextField } from "@mui/material";

export function FormularioAlteracaoLivro() {

    const { handleSubmit, register, reset, setValue } = useForm();

    useEffect(() => {

        axios.get("http://localhost:3001/livros/1")
            .then((response) => {
                reset({
                    name: response.data.name,
                    autor: response.data.autor,
                    data: response.data.data,
                    uf_address: response.data.uf_address,
                    avatarPath: response.data.avatarPath,
                });
            })

    }, [])

    return (
        <form
            encType="multipart/form-data"
            onSubmit={handleSubmit((data) => {
                console.log(data)
            })}
        >

            <TextField label="Nome" variant="outlined" margin="normal" fullWidth {...register("name")} />

            <TextField label="Autor" variant="outlined" margin="normal" fullWidth {...register("autor")} onChange={(e) => { setValue("autor", e.target.value) }} />

            <input type="file" {...register("avatarPath")}
                onChange={(e) => { console.log(e.target.files) }} />

            <TextField type="date" variant="outlined" margin="normal" fullWidth {...register("data")} />

            <TextField
                select
                label="UF"
                variant="outlined"
                {...register("uf_address")}
            >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="AC">Acre</MenuItem>
                <MenuItem value="AL">Alagoas</MenuItem>
                <MenuItem value="AP">Amapá</MenuItem>
                <MenuItem value="AM">Amazonas</MenuItem>
                <MenuItem value="BA">Bahia</MenuItem>
                <MenuItem value="CE">Ceará</MenuItem>
                <MenuItem value="DF">Distrito Federal</MenuItem>
                <MenuItem value="ES">Espírito Santo</MenuItem>
                <MenuItem value="GO">Goiás</MenuItem>
                <MenuItem value="MA">Maranhão</MenuItem>
                <MenuItem value="MT">Mato Grosso</MenuItem>
                <MenuItem value="MS">Mato Grosso do Sul</MenuItem>
                <MenuItem value="MG">Minas Gerais</MenuItem>
                <MenuItem value="PA">Pará</MenuItem>
                <MenuItem value="PB">Paraíba</MenuItem>
                <MenuItem value="PR">Paraná</MenuItem>
                <MenuItem value="PE">Pernambuco</MenuItem>
                <MenuItem value="PI">Piauí</MenuItem>
                <MenuItem value="RJ">Rio de Janeiro</MenuItem>
                <MenuItem value="RN">Rio Grande do Norte</MenuItem>
                <MenuItem value="RS">Rio Grande do Sul</MenuItem>
                <MenuItem value="RO">Rondônia</MenuItem>
                <MenuItem value="RR">Roraima</MenuItem>
                <MenuItem value="SC">Santa Catarina</MenuItem>
                <MenuItem value="SP">São Paulo</MenuItem>
                <MenuItem value="SE">Sergipe</MenuItem>
                <MenuItem value="TO">Tocantins</MenuItem>
            </TextField>

            <Button type="submit" variant="contained" >
                Enviar dados
            </Button>

        </form>
    );

}