/*global kakao */
import { linearFindNearest } from 'ol/array';
import React, { useEffect } from 'react';
import './../../css/Register.css';

const Register = () => {

    useEffect(() => {
        mapScript();
    }, []);

    const mapScript = () => {

        var mapContainer = document.getElementById('RgMap'),
            mapOptions = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 3
            }
        var RgMap = new kakao.maps.Map(mapContainer, mapOptions)

        var imageSrc = 'assets/images/pinkPaw.png',
            imageSize = new kakao.maps.Size(50, 69), // 마커이미지의 크기입니다
            imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

        if (navigator.geolocation) {
    
            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(function (position) {
                
                var lat = position.coords.latitude, // 위도
                    lon = position.coords.longitude; // 경도
                
                var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
                    message = '<div style="padding:5px;">내위치</div>'; // 인포윈도우에 표시될 내용입니다
                
                // 마커와 인포윈도우를 표시합니다
                displayMarker(locPosition, message);
                    
            });
            
        } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
            
            var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
                message = 'geolocation을 사용할수 없어요..'
                
            displayMarker(locPosition, message);
        }

        // 지도에 마커와 인포윈도우를 표시하는 함수입니다
        function displayMarker(locPosition, message) {
            var imageSrc = 'assets/images/loveHouse.png',
                imageSize = new kakao.maps.Size(50, 69), // 마커이미지의 크기입니다
                imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                
            // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: RgMap,
                position: locPosition,
                image: markerImage // 마커이미지 설정 
            });
            
            var iwContent = message, // 인포윈도우에 표시할 내용
                iwRemoveable = true;

            // 인포윈도우를 생성합니다
            var infowindow = new kakao.maps.InfoWindow({
                content: iwContent,
                removable: iwRemoveable
            });
            
            // 인포윈도우를 마커위에 표시합니다 
            infowindow.open(RgMap, marker);
            
            // 지도 중심좌표를 접속위치로 변경합니다
            RgMap.setCenter(locPosition);
        }
        
        var marker = new kakao.maps.Marker({
            image: markerImage,
            position: RgMap.getCenter()
        });
        marker.setMap(RgMap);
        
        kakao.maps.event.addListener(RgMap, 'click', function (mouseEvent) {
            console.log(mouseEvent.latLng);
            var latlng = mouseEvent.latLng;
            marker.setPosition(latlng);
        });
    }

    return (
       
        <div className='container-fluid '>
            <div className="row h-100">
                <div className="col-md-7 col-lg-8">
                    <div id="RgMap" style={{ "width": "100%", "height": "calc(100% - 60px)" }}></div>
                </div>
                <div className='col-md-5 col-lg-4'>
                    <div className="ip-are h-100">
                         <h1 className='display-4 fw-bold text-center'>xxxxx</h1>
                        <form className="needs-validation">
                            <div className="col-12">
                                <label className='form-label'>NAME</label>
                                <input type="text" className="form-control" id="houseName" />
                            </div>
                            <div className="col-md-5">
                                <label className='form-label'>TYPE</label>
                                <input type="text" className="form-control" id="type" />
                            </div>
                            <div className="col-md-4">
                                <label className='form-label'>MANAGE</label>
                                <input type="text" className="form-control" id="manage" />
                            </div>
                            <div className="col-md-3">
                                <label className='form-label'>COUNT</label>
                                <input type="text" className="form-control" id="count" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         </div>   
        


    )

};

export default Register;