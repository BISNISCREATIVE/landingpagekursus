import Header from '../components/Header';
import AuthForm from '../components/AuthForm';
import Footer from '../components/Footer';

const Signup = () => {
  const handleSignup = (data: { email: string; password: string; name?: string }) => {
    // Dummy signup logic
    alert(`Signup: ${data.email}`);
  };
  return (
    <>
      <Header />
      <AuthForm type="signup" onSubmit={handleSignup} />
      <Footer />
    </>
  );
};

export default Signup; 