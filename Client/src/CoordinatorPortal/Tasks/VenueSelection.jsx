import React from 'react'

const Card = ({ source, title, date, para, to, id, selected, handleClick, index }) => {
    return (
        <div class="p-4 sm:w-1/3 lg:w-1/4 cursor-pointer" id={id} onClick={() => handleClick(index)}>
            <div class=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-42 md:h-48 w-full object-cover object-center"
                    src={source ? source : "https://picsum.photos/id/188/720/400"} alt="blog" />
                <div class={`${selected ? "bg-indigo-700" : ""} p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in`}>
                    <h2 class="text-base font-medium text-indigo-300 mb-1">{date}</h2>
                    <h1 class="text-2xl font-semibold mb-3">{title}</h1>
                    <p class="leading-relaxed mb-3">{para}</p>
                </div>
            </div>
        </div>
    )
}

function VenueSelection() {

    const [selected, setSelected] = React.useState([
        false, false, false, false, false, false
    ]);

    const handleClick = (index) => {
        const arr = [false, false, false, false, false, false]
        arr[index] = !selected[index];
        setSelected(arr);
    }

    return (
        <div className='flex flex-col justify-center'>
            <div className='text-4xl font-semibold mb-3 text-center'>You have been assigned the task to book the venue.</div>
            <div className='flex flex-wrap'>
                <Card handleClick={handleClick} index={0} selected={selected[0]} title="venue 1" para="Address navi road" />
                <Card handleClick={handleClick} index={1} selected={selected[1]} title="venue 2" para="Address navi road" />
                <Card handleClick={handleClick} index={2} selected={selected[2]} title="venue 3" para="Address navi road" />
                <Card handleClick={handleClick} index={3} selected={selected[3]} title="venue 4" para="Address navi road" />
                <Card handleClick={handleClick} index={4} selected={selected[4]} title="venue 5" para="Address navi road" />
                <Card handleClick={handleClick} index={5} selected={selected[5]} title="venue 6" para="Address navi road" />
            </div>
        </div>
    )
}

export default VenueSelection