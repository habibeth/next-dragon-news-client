"use client"

import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";


//icon
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
const Footer = () => {
    const navItems = [
        {
            route: "Home",
            pathname: "/",
        },
        {
            route: "Pages",
            pathname: "/pages",
        },
        {
            route: "Category",
            pathname: "/category",
        },
        {
            route: "News",
            pathname: "/News",
        },
        {
            route: "About",
            pathname: "/about",
        },
        {
            route: "Contact",
            pathname: "/contact",
        },
    ];
    return (
        <div>
            <Box className="bg-black px-2 py-10 w-full text-center">
                <Container sx={{ "& svg": { color: "white" } }}>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>

                    <Box className="w-full text-center">
                        {navItems.map((item, i) => (
                            <Link key={i} href={item.pathname}>
                                <Button className="text-white">{item.route}</Button>
                            </Link>
                        ))}
                    </Box>

                    <Typography variant="body2" color="gray" textAlign="center">@2024 The Dragon News. Designed By Ahsan Habib</Typography>
                </Container>
            </Box>

        </div>
    );
};

export default Footer;