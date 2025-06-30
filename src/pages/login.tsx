import Header from '../components/Header';
import AuthForm from '../components/AuthForm';
import Footer from '../components/Footer';

const Login = () => {
  const handleLogin = (data: { email: string; password: string }) => {
    // Dummy login logic
    alert(`Login: ${data.email}`);
  };
  return (
    <>
      <Header />
      <AuthForm type="login" onSubmit={handleLogin} />
      <Footer />
    </>
  );
};

export default Login; 