import "./BottomNav.css";
interface Props {
  text: string;
  icon: any;
}

const BottomNavItem = ({ text, icon }: Props) => {
  return (
    <div className="d-flex align-items-start flex-column mb-3 align-items-center">
      <div className="nav-icon p-2">{icon}</div>
      <div className="nav-text">
        <span>{text}</span>
      </div>
    </div>
  );
};

export default BottomNavItem;
