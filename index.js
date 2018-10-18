import Autocomplete from './Autocomplete'
import './main.css'
import NewAutocomplete from './NewAutocomplete'
import usStates from './us-states'

// US States
const data = usStates.map(state => ({
  text: state.name,
  value: state.abbreviation,
}))
new Autocomplete(document.getElementById('state'), {
  data,
  onSelect: stateCode => {
    console.log('selected state:', stateCode)
  },
})

// Github Users
new NewAutocomplete(document.getElementById('gh-user'), {
  onSelect: ghUserId => {
    console.log('selected github user id:', ghUserId)
  },
})

new NewAutocomplete(document.getElementById('gh-user-2'), {
  onSelect: ghUserId => {
    console.log('selected github user id:', ghUserId)
  },
})
