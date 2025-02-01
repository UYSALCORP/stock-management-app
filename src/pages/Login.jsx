import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { Button, TextField, useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/hero.png";
import { Link } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import { Formik } from "formik";

const Login = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  /* and other goodies */
}) => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <AuthHeader />

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.main",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography variant="h4" align="center" mb={4} color="secondary.main">
            SIGN IN
          </Typography>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validate={{}}
            onSubmit={(values)=>{
              console.log(values)
            }}
          >
            <form onSubmit={handleSubmit}>
              <TextField
                name="email"
                label="E-Mail"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                type="email"
              />
              <TextField
                name="password"
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                required
              />
              <Button
                variant="contained"
                fullWidth
                sx={{ background: "black" }}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/register">Don't have an account? Sign Up</Link>
          </Box>
          <Typography
            variant="body2"
            color="secondary.main"
            align="center"
            sx={{ mt: 4 }}
          >
            {"Copyright © "}
            <Link color="inherit" href="https://www.github.com/UYSALCORP">
              UYSALCORP
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Grid>

        <AuthImage image={image} />
      </Grid>
    </Container>
  );
};

export default Login;
