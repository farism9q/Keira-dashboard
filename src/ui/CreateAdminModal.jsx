import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import CreateAdminForm from "../features/authentication/CreateAdminForm";
import Heading from "./Heading";
const CreateAdminModal = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            <Heading as="h3" header={"Create new admin"} />
          </DialogTitle>
        </DialogHeader>

        <CreateAdminForm />
      </DialogContent>
    </Dialog>
  );
};

export default CreateAdminModal;
