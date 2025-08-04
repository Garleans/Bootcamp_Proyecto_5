// src/components/FilterHeader.jsx
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  Box,
  Divider,
  Autocomplete,
  TextField,
} from "@mui/material";
import { Translation } from "react-i18next";
import axios from "axios";

const FILTER_KEYS = ["status", "species", "gender"];

const FilterHeader = ({ onFilterChange }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [localFilters, setLocalFilters] = useState({});
  const [filterOptions, setFilterOptions] = useState({
    status: [],
    species: [],
    gender: [],
  });

  const extractUnique = (arr) => [...new Set(arr)].filter(Boolean);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        let allCharacters = [];
        let page = 1;
        let totalPages = 1;

        while (page <= totalPages) {
          const { data } = await axios.get(
            `https://rickandmortyapi.com/api/character/?page=${page}`
          );
          allCharacters = allCharacters.concat(data.results);
          totalPages = data.info.pages;
          page++;
        }

        setFilterOptions({
          status: extractUnique(allCharacters.map((c) => c.status)),
          species: extractUnique(allCharacters.map((c) => c.species)),
          gender: extractUnique(allCharacters.map((c) => c.gender)),
        });
      } catch (err) {
        console.error("Error fetching filter options:", err);
      }
    };
    fetchOptions();
  }, []);

  const toggleDrawer = () => setDrawerOpen((o) => !o);

  const handleChange = (key, newValue) => {
    setLocalFilters((prev) => {
      const updated = { ...prev };
      if (!newValue || (Array.isArray(newValue) && newValue.length === 0)) {
        delete updated[key];
      } else {
        updated[key] = newValue;
      }
      return updated;
    });
  };

  return (
    <Translation>
      {(t) => {
        const getOptionsSortedTranslated = (key) => {
          let options = filterOptions[key] || [];

          return options
            .map((opt) => ({ label: t(opt) || opt, value: opt }))
            .sort((a, b) => a.label.localeCompare(b.label));
        };

        return (
          <>
            <AppBar position="sticky" color="primary" sx={{ mb: 2 }}>
              <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  Rick & Morty
                </Typography>
                <Button
                  color="inherit"
                  variant="outlined"
                  onClick={toggleDrawer}
                  sx={{ fontWeight: "bold" }}
                >
                  {t("Filters")}
                </Button>
              </Toolbar>
            </AppBar>

            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
              <Box
                sx={{
                  width: 320,
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {t("Filter characters")}
                </Typography>

                {FILTER_KEYS.map((key) => (
                  <Autocomplete
                    key={key}
                    multiple
                    options={getOptionsSortedTranslated(key)}
                    getOptionLabel={(option) => option.label}
                    disableCloseOnSelect
                    value={
                      (localFilters[key] || []).map((val) => ({
                        label: t(val) || val,
                        value: val,
                      })) || []
                    }
                    onChange={(e, newValue) =>
                      handleChange(
                        key,
                        newValue.map((v) => v.value)
                      )
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label={t(
                          key.charAt(0).toUpperCase() + key.slice(1)
                        )}
                        size="small"
                        margin="normal"
                      />
                    )}
                    sx={{ mb: 2 }}
                  />
                ))}

                <Divider sx={{ my: 2 }} />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "auto",
                  }}
                >
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => {
                      setLocalFilters({});
                      onFilterChange({});
                    }}
                  >
                    {t("Clear")}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      onFilterChange(localFilters);
                      setDrawerOpen(false);
                    }}
                  >
                    {t("Apply")}
                  </Button>
                </Box>
              </Box>
            </Drawer>
          </>
        );
      }}
    </Translation>
  );
};

export default FilterHeader;
