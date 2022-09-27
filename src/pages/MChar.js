const MChar = ({ content }) => {

    return (
        <section className="MChar" >
            <div className="container">
                <h2>블루스택 특징</h2>
                <div className="game_control">
                    <figure>
                        <img src={process.env.PUBLIC_URL + '/images/game_control.jpg'}></img>
                        <img src={process.env.PUBLIC_URL + '/images/game_control_scroll_img.png'} className='scroll_img'></img>
                    </figure>
                    <div className="game_control_sub">
                        <img src={process.env.PUBLIC_URL + '/images/keyboard.png'}></img>
                        <h2>게임 컨트롤</h2>
                        <p>사전 설정된 컨트롤로 플레이하거나 사용자 지정합니다.</p>
                        <strong><a href="">더보기</a></strong>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default MChar