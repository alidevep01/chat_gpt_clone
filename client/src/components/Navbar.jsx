import { Box, Link, Typography, useTheme } from "@mui/material";

const Navbar = () => {
  const theme = useTheme();
  return (
    <Box
      width={"100%"}
      backgroundColor={theme.palette.background.alt}
      p="1rem 6%"
      textAlign={"center"}
      sx={{ boxShadow: 3, mb: 2 }}
    >
      <Typography variant="h1" color={"primary"} fontWeight="bold">
        ChatGPT Clone
      </Typography>
      <Link
        href="/register"
        sx={{ textDecoration: "none", color: "#60bf70", padding: "8px" }}
      >
        Sign Up
      </Link>
      <Link
        href="/login"
        sx={{ textDecoration: "none", color: "#60bf70", padding: "8px" }}
      >
        Sign In
      </Link>
    </Box>
  );
};
export default Navbar;
