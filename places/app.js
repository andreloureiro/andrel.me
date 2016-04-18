const apiKey = 'AIzaSyDJCIQiZ8y7o5RlSTNMF6vKMzoHU4LIHgE'
const $mapContainer = document.querySelector('#map')
const $searchInput = document.querySelector('#searchInput')
const $searchButton = document.querySelector('#searchButton')
const $searchResult = document.querySelector('#searchResult')
const $form = document.querySelector('form')


const renderResultList = (container, results) => {
  container.innerHTML = ''
  results.forEach(result => {
    const img = document.createElement('img')
    const li = document.createElement('li')
    const p = document.createElement('p')
    const hr = document.createElement('hr')

    img.src = !!result.photos
      ? result.photos[0].getUrl({maxWidth: 100, maxHeight: 100})
      : ''

    p.innerHTML = `${result.name}<br />
    ${result.vicinity}<br />
    <a href="https://www.google.com/maps/dir/Current+Location/${result.vicinity.split(' ').join('+')}">Rota</a>
    `

    li.appendChild(img)
    li.appendChild(p)
    li.appendChild(hr)
    container.appendChild(li)
  })
}

const currentPosition = () => new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(position => {
    let current = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    }
    console.log(current)
    resolve(current)
  })
})

const Map = center => new google.maps.Map($mapContainer, {
  center,
  zoom: 15
})

const LatLng = position => new google.maps.LatLng(position.lat, position.lng)

const PlacesServices = map => new google.maps.places.PlacesService(map)

const placeRequest = (location, keyword) => ({
  rankby: 'distance',
  radius: 10000,
  location,
  keyword,
})

const placeResults = (query, location, placeService) => {
  let request = placeRequest(location, query)
  placeService.nearbySearch(request, (results, status) => {
    console.log(results, status)
    renderResultList($searchResult, results)
  })
}

const queryPlaces = query => {
  currentPosition()
    .then(position => {
      let center = LatLng(position)
      let map = Map(center)
      let placeService = PlacesServices(map)
      placeResults(query, center, placeService)
    })
}

$searchButton.addEventListener('click', e => {
  let query = $searchInput.value.split(' ')
  queryPlaces(query)
})
