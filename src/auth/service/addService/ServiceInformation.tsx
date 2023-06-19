import RuleRecive from "../../../components/rule/RuleRecive";
import Label from "../../../components/label/Label";
import Input from "../../../components/input/Input";
import { useForm } from "react-hook-form";
import CustomButton from "../../../components/button/CustomButton";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase-app/Firebase-config";
import { toast } from "react-toastify";

type Props = {};

const ServiceInformation = (props: Props) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      idservice: "",
      name: "",
      describe: "",
    },
  });

  const handleAddService = async (values: any) => {
    const cloneValues = { ...values };
    const colRef = collection(db, "service");
    await addDoc(colRef, {
      ...cloneValues,
      createdAt: serverTimestamp(),
    });
    alert("Thêm thành công");
    toast.success("Create new post successfully!");
    reset({
      idservice: "",
      name: "",
      describe: "",
    });
  };
  return (
    <form onSubmit={handleSubmit(handleAddService)}>
      <div className="max-w-[1152px] w-full ">
        <div className="w-full bg-white min-h-[550px] h-full rounded-lg">
          <div className="px-6 pt-4">
            <span className="text-[20px] leading-[30px] font-bold text-orange">
              Thông tin dịch vụ
            </span>
            <div className="flex items-center justify-center gap-6">
              <div className="mt-[20px] flex-1">
                <div className="flex flex-col gap-y-2">
                  <Label
                    className="text-[16px] leading-6 font-semibold"
                    htmlFor="idservice"
                  >
                    Mã dịch vụ: *
                  </Label>
                  <Input
                    placeholder="201"
                    type="text"
                    control={control}
                    className="mb-4 p-2 w-[540px] pl-2 h-[44px] rounded-lg border-[1px] border-solid border-gray"
                    name="idservice"
                    autoComplete="off"
                  >
                    <span></span>
                  </Input>
                </div>
                <div className="flex flex-col gap-y-2">
                  <Label
                    className="text-[16px] leading-6 font-semibold"
                    htmlFor="name"
                  >
                    Tên dịch vụ: *
                  </Label>
                  <Input
                    control={control}
                    placeholder="Khám tim mạch"
                    type="text"
                    className="mb-4 p-2 w-[540px] pl-2 h-[44px] rounded-lg border-[1px] border-solid border-gray"
                    name="name"
                    autoComplete="off"
                  >
                    <span></span>
                  </Input>
                </div>
              </div>
              <div className="flex-1 mt-5">
                <div className="flex flex-col gap-y-2">
                  <Label
                    className="text-[16px] leading-6 font-semibold"
                    htmlFor="describe"
                  >
                    Mô tả:
                  </Label>
                  <Input
                    control={control}
                    placeholder="Mô tả dịch vụ"
                    type="text"
                    className="mb-4 pb-[105px] pt-[10px] w-[553px] pl-2  rounded-lg border-[1px] border-solid border-gray"
                    name="describe"
                    autoComplete="off"
                  >
                    <span></span>
                  </Input>
                </div>
              </div>
            </div>
            <div className="mb-3 ">
              <RuleRecive></RuleRecive>
            </div>
            <span className="text-[14px] leading-[21px] text-gray300 ">
              * Là trường thông tin bắt buộc
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-8 mt-6">
          <CustomButton
            text="text-orange"
            bg="bg-redor"
            name="Hủy bỏ"
            className="max-w-[180px]  w-full h-[48px] text-[16px] leading-[22px] pt-3 pb-3 pl-6 pr-6 "
          ></CustomButton>
          <CustomButton
            className="max-w-[180px]  w-full h-[48px] text-[16px] leading-[22px] pt-3 pb-3 pl-6 pr-6 "
            text=""
            bg=""
            name="Thêm dịch vụ"
          ></CustomButton>
        </div>
      </div>
    </form>
  );
};

export default ServiceInformation;
