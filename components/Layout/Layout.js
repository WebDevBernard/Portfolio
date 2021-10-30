// Layout is responsible for making sure every page is wrapped with
import Nav from "./Nav";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";
import classes from "./Layout.module.css";
export default function Layout(props) {
  return (
    <div>
      <Nav />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}
