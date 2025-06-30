import Header from '../components/Header';
import Footer from '../components/Footer';
import { users } from '../data/users';

const Profile = () => {
  const user = users[0]; // Dummy user
  return (
    <>
      <Header />
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow mt-8 border border-primary">
        <h2 className="text-2xl font-bold text-primary mb-4">Profil Peserta</h2>
        <div className="mb-2"><b>Nama:</b> {user.name}</div>
        <div className="mb-2"><b>Email:</b> {user.email}</div>
        <div className="mb-2"><b>Role:</b> {user.role}</div>
      </div>
      <Footer />
    </>
  );
};

export default Profile; 