import Button from "../ui/form/Button";
import Password from "../ui/form/Password";
import UserName from "../ui/form/UserName";
export default function LoginForm() {
  return (
    <form action="" className="flex flex-col gap-5">
      <UserName />
      <Password />
      <div className="flex w-full items-center justify-end">
        <a
          href="/forget-password"
          className="text-teal-700 italic text-sm hover:underline hover:text-teal-600 transition hover:scale-96"
        >
          Forgot password?
        </a>
      </div>
      <div className="flex w-full items-center gap-3">
        <Button className=" hover:bg-red-700 w-full bg-red-800">Reset </Button>
        <Button className=" hover:bg-teal-700 w-full bg-teal-800">
          submit{" "}
        </Button>
      </div>
    </form>
  );
}
