type UserType = "sender" | "receiver";

interface Message {
    id?: string;
    message: string;
    time: string;
    userType: UserType;
    avatarUrl: string;
}

export const SendMessage = ({ message, time, userType, avatarUrl }: Message) => {
    return (
        <div className="flex flex-col gap-1 px-4 py-6">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white ${userType === "sender" ? "bg-blue-500" : "bg-[#343434]"}`}>
                <img
                    src={avatarUrl}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                />
                <p>{message}</p>
            </div>
            <span className="text-gray-400 text-xs">{time}</span>
        </div>
    );
};