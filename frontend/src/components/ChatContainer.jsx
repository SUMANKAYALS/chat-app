import { useChatStore } from "../store/useChatStore";
import { useEffect, useRef } from "react";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
    const {
        messages,
        getMessages,
        isMessagesLoading,
        selectedUser,
        subscribeToMessages,
        unsubscribeFromMessages,
    } = useChatStore();
    const { authUser } = useAuthStore();
    const messageEndRef = useRef(null);

    useEffect(() => {
        getMessages(selectedUser._id);

        subscribeToMessages();

        return () => unsubscribeFromMessages();
    }, [selectedUser._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);

    useEffect(() => {
        if (messageEndRef.current && messages) {
            messageEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    if (isMessagesLoading) {
        return (
            <div className="flex-1 flex flex-col overflow-auto">
                <ChatHeader />
                <MessageSkeleton />
                <MessageInput />
            </div>
        );
    }

    return (
        <div className="flex-1 flex flex-col overflow-auto">
            <ChatHeader />

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <div
                        key={message._id}
                        className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"}`}
                        ref={messageEndRef}
                    >
                        <div className=" chat-image avatar">
                            <div className="size-10 rounded-full border">
                                <img
                                    src={
                                        message.senderId === authUser._id
                                            ? authUser.profilePic || "/avatar.png"
                                            : selectedUser.profilePic || "/avatar.png"
                                    }
                                    alt="profile pic"
                                />
                            </div>
                        </div>
                        <div className="chat-header mb-1">
                            <time className="text-xs opacity-50 ml-1">
                                {formatMessageTime(message.createdAt)}
                            </time>
                        </div>
                        <div className="chat-bubble flex flex-col">
                            {message.image && (
                                <img
                                    src={message.image}
                                    alt="Attachment"
                                    className="sm:max-w-[200px] rounded-md mb-2"
                                />
                            )}
                            {message.text && <p>{message.text}</p>}
                        </div>
                    </div>
                ))}
            </div>

            <MessageInput />
        </div>
    );
};
export default ChatContainer;


// import { useChatStore } from "../store/useChatStore";
// import { useEffect, useRef } from "react";
// import ChatHeader from "./ChatHeader";
// import MessageInput from "./MessageInput";
// import MessageSkeleton from "./skeletons/MessageSkeleton";
// import { useAuthStore } from "../store/useAuthStore";
// import { formatMessageTime } from "../lib/utils";

// const ChatContainer = () => {
//     const {
//         messages = [],
//         getMessages,
//         isMessagesLoading,
//         selectedUser,
//         setSelectedUser, // To restore user
//         subscribeToMessages,
//         unsubscribeFromMessages,
//     } = useChatStore();

//     const { authUser } = useAuthStore();
//     const messageEndRef = useRef(null);

//     // ✅ Debugging Logs (Open Console in Browser)
//     console.log("ChatContainer Rendered");
//     console.log("Selected User:", selectedUser);
//     console.log("Messages:", messages);

//     // ✅ Restore selected user from localStorage after reload
//     useEffect(() => {
//         const savedUser = localStorage.getItem("selectedUser");
//         if (!selectedUser && savedUser) {
//             setSelectedUser(JSON.parse(savedUser));
//             console.log("Restored Selected User from LocalStorage:", JSON.parse(savedUser));
//         }
//     }, [selectedUser, setSelectedUser]);

//     // ✅ Save selected user in localStorage when changed
//     useEffect(() => {
//         if (selectedUser) {
//             localStorage.setItem("selectedUser", JSON.stringify(selectedUser));
//             console.log("Saved Selected User to LocalStorage:", selectedUser);
//         }
//     }, [selectedUser]);

//     // ✅ Prevent useEffect from running if selectedUser is null
//     useEffect(() => {
//         if (!selectedUser?.id) return;

//         console.log("Fetching Messages for User:", selectedUser._id);
//         getMessages(selectedUser._id);
//         subscribeToMessages();

//         return () => unsubscribeFromMessages();
//     }, [selectedUser?.id, getMessages, subscribeToMessages, unsubscribeFromMessages]);

//     useEffect(() => {
//         if (messageEndRef.current) {
//             messageEndRef.current.scrollIntoView({ behavior: "smooth" });
//         }
//     }, [messages]);

//     // ✅ Show a message if no user is selected
//     if (!selectedUser) {
//         return (
//             <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
//                 <p>Select a user to start chatting</p>
//             </div>
//         );
//     }

//     if (isMessagesLoading) {
//         return (
//             <div className="flex-1 flex flex-col overflow-auto">
//                 <ChatHeader />
//                 <MessageSkeleton />
//                 <MessageInput />
//             </div>
//         );
//     }

//     return (
//         <div className="flex-1 flex flex-col overflow-auto">
//             <ChatHeader />

//             <div className="flex-1 overflow-y-auto p-4 space-y-4">
//                 {messages.length > 0 ? (
//                     messages.map((message, index) => (
//                         <div
//                             key={message._id}
//                             className={`chat ${message.senderId === authUser?._id ? "chat-end" : "chat-start"}`}
//                         >
//                             <div className="chat-image avatar">
//                                 <div className="size-10 rounded-full border">
//                                     <img
//                                         src={
//                                             message.senderId === authUser?._id
//                                                 ? authUser?.profilePic || "/avatar.png"
//                                                 : selectedUser?.profilePic || "/avatar.png"
//                                         }
//                                         alt="profile pic"
//                                     />
//                                 </div>
//                             </div>
//                             <div className="chat-header mb-1">
//                                 <time className="text-xs opacity-50 ml-1">
//                                     {formatMessageTime(message?.createdAt)}
//                                 </time>
//                             </div>
//                             <div className="chat-bubble flex flex-col">
//                                 {message.image && (
//                                     <img
//                                         src={message.image}
//                                         alt="Attachment"
//                                         className="sm:max-w-[200px] rounded-md mb-2"
//                                     />
//                                 )}
//                                 {message.text && <p>{message.text}</p>}
//                             </div>

//                             {/* ✅ Scroll ref on the last message only */}
//                             {index === messages.length - 1 && <div ref={messageEndRef} />}
//                         </div>
//                     ))
//                 ) : (
//                     <p className="text-center text-gray-500">No messages yet</p>
//                 )}
//             </div>

//             <MessageInput />
//         </div>
//     );
// };

// export default ChatContainer;


