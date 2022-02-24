export default function Layout(props: any) {
  return (
    <div className="space-y-20 md:max-w-lg m-auto p-4 ">{props.children}</div>
  );
}
