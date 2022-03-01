export default function Layout(props: any) {
  return (
    <div className="md:max-w-lg m-auto p-4 space-y-20 relative">
      {props.children}
    </div>
  );
}
