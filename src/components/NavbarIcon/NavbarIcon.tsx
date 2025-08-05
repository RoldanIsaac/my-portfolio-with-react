type Props = {
  icon: string | null;
  label: string;
};

const NavbarIcon: React.FC<Props> = ({ label }) => {
  return (
    <div className="cursor-pointer">
      <label htmlFor="">{label}</label>
    </div>
  );
};

export default NavbarIcon;
