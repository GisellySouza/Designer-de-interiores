import { useState, useEffect, useContext} from 'react'

import './ProjectsList.css'

//assets
import LikeFilled from '../../assets/like-filled.svg'
import LikeOutline from '../../assets/like.svg'

//Utils
    import { getApiData } from '../../services/apiServices'

//COMPONENTS
import Button from '../Button/Button'


//Context
    import { AppContext } from '../../contexts/AppContext'




function ProjectsList (){
    const [projects, setProjects] = useState([])
    const appContext = useContext(AppContext)
    const [favProjects, setFavProject] = useState([])
    const handleSavedProjects = (id) => {
        setFavProject((prevFavProjects) => {
            if (prevFavProjects.includes(id)){
                const filterArray = prevFavProjects.filter ((projectId) => projectId !== id)
                sessionStorage.setItem('favProjects', JSON.stringify(filterArray))
                return prevFavProjects.filter((projectId) => projectId !== id)
            }else {
                sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProjects, id]))
                return [...prevFavProjects. id]
            }
        })   
    }
    

    useEffect(() => {
        const fetchData = async () =>{
            try {
                const projectsResponse = await getApiData('projects')
                setProjects(projectsResponse)
            } catch {
                setProjects([])
            } 
        }
        fetchData()
    }, []) 
    useEffect(() => {
        const savedFavProjects =JSON.parse(sessionStorage.getItem('favProjects'))
        if (savedFavProjects){
            setFavProject(savedFavProjects)
        }
    }, [])


    return (
        <div className="projects-section">
            <div className="projects-hero">
                    <h2>{appContext.languages[appContext.language].projects.title}</h2>
                    <p>{appContext.languages[appContext.language].projects.subtitle}</p>
            </div>

            <div className="projects-grid">
                {
                    projects ?
                        projects.map((project) => (
                            <div className="projects-card d-flex jc-center al-center fd-column" key={project.id}>
                                <div 
                                    className="thumb tertiary-background"
                                    style={{backgroundImage:`url(${project.thumb})`}}
                                ></div>
                                <h3>{project.title}</h3>
                                <p>{project.subtitle}</p>
                                <Button buttonStyle=" like" onClick={() => handleSavedProjects(project.id)}>
                                    <img src={favProjects.includes(project.id) ? LikeFilled : LikeOutline}/>   
                                </Button>
                            </div>
                        ))
                    :
                    null
                }
            </div>

        </div>
    )

}

export default ProjectsList