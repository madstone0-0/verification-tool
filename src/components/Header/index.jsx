import MenuIcon from "@mui/icons-material/Menu";
import {
    Avatar,
    Box,
    Container,
    CssBaseline,
    IconButton,
    Menu,
    MenuItem,
    Tab,
    Tabs,
    Toolbar,
    Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import React, { useState } from "react";

const Header = ({ title }) => {
    const navItems = ["Home", "History", "Support", "About"];
    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (e) => {
        setAnchorElNav(e.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <>
            <CssBaseline />
            <AppBar
                style={{ marginBottom: "20px" }}
                position="static"
                component="nav"
            >
                <Container maxWidth="x1">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex", sm: "flex" },
                                fontWeight: "bold",
                                color: "inherit",
                            }}
                        >
                            {title}
                        </Typography>
                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
                            <Tabs
                                textColor="secondary"
                                indicatorColor="secondary"
                                value={0}
                            >
                                {navItems.map((item, key) => (
                                    <Tab
                                        key={key}
                                        sx={{ color: "inherit" }}
                                        label={item}
                                        value={key}
                                    />
                                ))}
                            </Tabs>
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex", sm: "none", md: "none" },
                            }}
                        >
                            <IconButton
                                size="large"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-header"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: "block", md: "none" } }}
                            >
                                {navItems.map((item) => (
                                    <MenuItem
                                        key={item}
                                        onClick={handleCloseNavMenu}
                                    >
                                        <Typography textAlign="center">
                                            {item}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            sx={{
                                mr: 2,
                                flexGrow: 1,
                                display: {
                                    md: "none",
                                    sm: "none",
                                    xs: "flex",
                                },
                                color: "inherit",
                                fontWeight: "bold",
                            }}
                        >
                            {title}
                        </Typography>
                        <IconButton sx={{ p: 0 }}>
                            <Avatar alt="ballin" />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Header;
