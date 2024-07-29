import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProjects, toggleProjectLike } from '../../redux/actions'
import Filter from '../../components/filter/Filter'
import Cards from '../../components/cards/Cards'

const HomePage = () => {
	const dispatch = useDispatch()
	const { allProjects } = useSelector((state) => state.projects)
	const { loggedUser, token } = useSelector((state) => state.auth)
	const [searchParams, setSearchParams] = useState({
		pagination: 15,
		title: '',
		tags: '',
		technologies: '',
		sort: 'new',
	})

	const handleScroll = () => {
		const bottom =
			Math.ceil(window.innerHeight + window.scrollY) >=
			document.documentElement.scrollHeight
		if (bottom) {
			setSearchParams((prev) => ({...prev, pagination: (prev.pagination + 5)}))
		}
	}

	const toggleLike = (project) => {
		if (loggedUser && project) {
			dispatch(
				toggleProjectLike(
					{ projectId: project.id, userId: loggedUser.id },
					searchParams,
					token
				)
			)
		}
	}

	const updateSearchParams = (newParams) => {
		setSearchParams((prevParams) => ({
			...prevParams,
			...newParams,
		}))
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		dispatch(getAllProjects(searchParams, token))
	}, [dispatch, searchParams])

	return (
		<div className="mx-auto">
			<Filter updateSearchParams={updateSearchParams} />
			<Cards projects={allProjects} toggleLike={toggleLike} />
		</div>
	)
}

export default HomePage
