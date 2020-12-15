import React, {useEffect, useState, useRef} from "react";
import JobManager from "../../modules/JobManager"

export const AutoSearch = () => {
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState("");
    const wrapperRef = useRef(null);

    useEffect(() => {
        JobManager.getAll().then((jobs) => {
            setOptions(jobs);
        })
    }, []);
    
    const setJobName = name => {
        setSearch(name);
        setDisplay(false);
    }

    useEffect(()  => {
        document.addEventListener("mousedown", handleClickOutside);
        return() => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

    const handleClickOutside = event => {
        const {current: wrap} = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
            setDisplay(false);
        }
    }
   

    return(
        <div ref={wrapperRef} className="flex-container flex-column pos-rel">
            <input id="auto"
                
                onClick={() => {setDisplay(!display); console.log("You clicked AutoComplete");}}     
                placeholder="Type to search"
                value={search}
                onChange={(event) => setSearch(event.target.value)} />
                {display && (
                    <div className="autoContainer">
                        {options.filter(({ title }) => title.indexOf(search.toLowerCase()) > -1)
                            .map((v,i) => {
                            return (
                                <div onClick={() => setJobName(v.title)}
                                key={i} 
                                tabIndex="0"
                                className="option"
                                >
                                    <span>{v.id}  {v.title}</span>
                                </div>
                            )
                                
                        })} 
                    </div>
                )}
        </div>
    );
}