import AccountInfo from "./Info/_index";

export default function Account() {
  return (
    <section className="!lg:max-w-1/2 w-full">
      <p className="text-3xl font-bold text-primary pb-12">Account Info</p>
      <AccountInfo />
    </section>
  );
}
