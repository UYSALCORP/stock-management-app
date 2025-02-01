import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/regi.avif";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Box, TextField } from "@mui/material";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import { Formik } from "formik";

const Register = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <AuthHeader />

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>
          {/* //! Formik yapısı */}
          <Formik
            initialValues={{
              username: "",
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validate={{}}
            onSubmit={{}}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (<form action="">
              <TextField
                name="username"
                label="Username"
                variant="outlined"
                fullWidth
                value={values.username}
                onChange={handleChange}
                helperText={touched.username && errors.username} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için error attribute ı benden false/true degeri bekliyor ondan dolayı daha sağlıklı olması için boolean deger döndürüyoruz.
                // touched da kullanıcının inputa tıklayıp tıklamadığını yakalıyor
                error={touched.username && errors.username}
                onBlur={handleBlur} // kullanıcının input alanından ayrıldığını yaklayan event
                margin="normal"
              />
              <TextField
                name="firstName"
                label="First Name"
                variant="outlined"
                fullWidth
                value={values.firstName}
                onChange={handleChange}
                helperText={touched.firstName && errors.firstName}
                error={touched.firstName && errors.firstName}
                onBlur={handleBlur} 
                margin="normal"
              />
              <TextField
                name="lastName"
                label="Last Name"
                variant="outlined"
                fullWidth
                value={values.lastName}
                onChange={handleChange}
                helperText={touched.lastName && errors.lastName}
                error={touched.lastName && errors.lastName}
                onBlur={handleBlur} 
                margin="normal"
              />
              <TextField
                name="email"
                label="E-Mail"
                variant="outlined"
                fullWidth
                value={values.email}
                onChange={handleChange}
                helperText={touched.email && errors.email}
                error={touched.email && errors.email}
                onBlur={handleBlur} 
                margin="normal"
                type="email"
              />
              <TextField
                name="password"
                label="Password"
                variant="outlined"
                fullWidth
                value={values.password}
                onChange={handleChange}
                helperText={touched.password && errors.password}
                error={touched.password && errors.password}
                onBlur={handleBlur} 
                margin="normal"
                type="password"
              />
            </form>)}
          </Formik>
          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/">Already have an account? Sign in</Link>
          </Box>
        </Grid>

        <AuthImage image={image} />
      </Grid>
    </Container>
  );
};

export default Register;
