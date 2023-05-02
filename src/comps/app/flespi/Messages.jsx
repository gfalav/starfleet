import React from "react"
import { Box } from "@mui/material"
import axios from "axios"
import { GoogleMap, Marker, Polyline, useLoadScript } from "@react-google-maps/api"
import Dot from '../../../images/dot.png'

const Flespi = () => {
    const [msg, setMsg] = React.useState(null)
    const [center, setCenter] = React.useState({lat: -33.3, lng: -66.3})
    const channel = 1158095
    const plineOpts = {
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 7,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
        radius: 30000,
        zIndex: 1
      };
      
    React.useEffect( () => {

        const fetchData = async () => {
            await axios({
                method: 'GET',
                url: 'https://flespi.io/gw/channels/' + channel + '/messages',
                headers: {
                    Authorization: 'FlespiToken vvhGSxZ8hZOaa3xTyt4ZKVlBufO6qvKMQRgwc3tiQ5iPYEykVq9vakVunxoCQYev'
                }
            }).then ( (response) => {
                if (response) {
                    setMsg(response.data.result.map( (item) => {
                        return {
                            lat: item["position.latitude"],
                            lng: item["position.longitude"],
                            direction: item["position.direction"],
                            speed: item["position.speed"],
                            altitude: item["position.longitude"],
                            timestamp: item["server.timestamp"],
                            ident: item.ident
                        }
                    }))
                    setCenter({lat: response.data.result[0]["position.latitude"],lng: response.data.result[0]["position.longitude"]})
                    
                }
            }).catch ( (error) => {
                console.error(error)
            })
        }

        fetchData()

    },[])

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: 'AIzaSyCS0O2bJ1gdSqA5nlOUhBQKoVnLAMqFL2U'
    })

    if (!isLoaded) return <div>Loading...</div>

    return(
        <Box sx={{
            width: '100%',
            height: 600
        }}>
            <GoogleMap
                mapContainerClassName="mapClass"
                center={center}
                zoom={12}
            >
                { msg? 
                    <>
                    {msg.map( (item, index)=> <Marker key={index} position={{ lat: item.lat, lng: item.lng }} 
                        icon={{
                            url: Dot,
                            scale: 2,
                        }}
                    />)}
                    <Polyline options={plineOpts} path={msg} />
                    </>
                : ''}
            </GoogleMap>
        </Box>
    )
}

export default Flespi