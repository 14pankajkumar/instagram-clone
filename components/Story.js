const Story = ({img, username}) => {
    const url = "https://scontent.fdel25-2.fna.fbcdn.net/v/t1.6435-9/163513282_1764300493774796_226045888999478509_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=8CWYfdGdyg0AX9ASC0I&_nc_ht=scontent.fdel25-2.fna&oh=6d47c8aab4a74f799d8ae34316afdbca&oe=61DDB574"
    return (
        <div>
            <img 
            className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
            src={url} 
            alt="" 
            />
            <p className="text-xs w-14 truncate text-center">{username}</p>
        </div>
    )
}

export default Story
