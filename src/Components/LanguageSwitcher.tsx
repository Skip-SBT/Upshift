import React from "react";
import {useTranslation} from "react-i18next";
import {MenuItem, Select, Box, SelectChangeEvent} from "@mui/material";

export default function LanguageSwitcher() {
    let {i18n} = useTranslation();

    const changeLanguage = (event: SelectChangeEvent) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <Box sx={{minWidth: 120}}>
            <Select
                value={i18n.language}
                onChange={changeLanguage}
                variant="outlined"
                displayEmpty
            >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="de">Deutsch</MenuItem>
            </Select>
        </Box>
    );
}
