import { TailSpin } from "react-loader-spinner";

export default function Loading({color}){
    return (
        <TailSpin
            color="#f77308"
            height={40}
            width={50}
            strokeWidth={3}>
        </TailSpin>
    )
}