import React from 'react'

function Bottom() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", minHeight: "30vh", padding: "60px 80px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", width: "100%" }}>
                    <div className='Logo'>
                        <img src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512" alt="Logo" width="180px" />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", textAlign: "start" }}>
                        <p>Feature</p>
                        <p>FAQ</p>
                        <p>Pricing</p>
                        <p>Testimonials</p>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", width: "100%", flexDirection: "row" }}>
                    <div>
                        <p>© 2022 ManageWise, Inc.</p>
                    </div>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"}}>
                        <img style={{ width: "20px" }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJzdmcyOTEwMDU5NCI+PHBhdGggZD0iTSAwIDAgTCAyNCAwIEwgMjQgMjQgTCAwIDI0IFoiIGZpbGw9InRyYW5zcGFyZW50Ii8+PHBhdGggZD0iTSA5IDEyIEMgOSAxMC4zNDMgMTAuMzQzIDkgMTIgOSBDIDEzLjY1NyA5IDE1IDEwLjM0MyAxNSAxMiBDIDE1IDEzLjY1NyAxMy42NTcgMTUgMTIgMTUgQyAxMC4zNDMgMTUgOSAxMy42NTcgOSAxMiBaIiBmaWxsPSJ2YXIoLS10b2tlbi1kMjNkZDVhOS1iNDg2LTRmYTMtODM5NC0yY2Q3OTQzZjI4ZGEsIHJnYigyOCwgMjgsIDI4KSkiLz48cGF0aCBkPSJNIDE2LjEyNSAyLjYyNSBMIDcuODc1IDIuNjI1IEMgNC45NzYgMi42MjUgMi42MjUgNC45NzYgMi42MjUgNy44NzUgTCAyLjYyNSAxNi4xMjUgQyAyLjYyNSAxOS4wMjQgNC45NzYgMjEuMzc1IDcuODc1IDIxLjM3NSBMIDE2LjEyNSAyMS4zNzUgQyAxOS4wMjQgMjEuMzc1IDIxLjM3NSAxOS4wMjQgMjEuMzc1IDE2LjEyNSBMIDIxLjM3NSA3Ljg3NSBDIDIxLjM3NSA0Ljk3NiAxOS4wMjQgMi42MjUgMTYuMTI1IDIuNjI1IFogTSAxMiAxNi41IEMgOS41MTUgMTYuNSA3LjUgMTQuNDg1IDcuNSAxMiBDIDcuNSA5LjUxNSA5LjUxNSA3LjUgMTIgNy41IEMgMTQuNDg1IDcuNSAxNi41IDkuNTE1IDE2LjUgMTIgQyAxNi41IDE0LjQ4NSAxNC40ODUgMTYuNSAxMiAxNi41IFogTSAxNi44NzUgOC4yNSBDIDE2LjI1NCA4LjI1IDE1Ljc1IDcuNzQ2IDE1Ljc1IDcuMTI1IEMgMTUuNzUgNi41MDQgMTYuMjU0IDYgMTYuODc1IDYgQyAxNy40OTYgNiAxOCA2LjUwNCAxOCA3LjEyNSBDIDE4IDcuNzQ2IDE3LjQ5NiA4LjI1IDE2Ljg3NSA4LjI1IFoiIGZpbGw9InZhcigtLXRva2VuLWQyM2RkNWE5LWI0ODYtNGZhMy04Mzk0LTJjZDc5NDNmMjhkYSwgcmdiKDI4LCAyOCwgMjgpKSIvPjwvc3ZnPg" alt="" />
                        <img style={{ width: "20px" }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJzdmczMzg2Nzg3Njk5Ij48cGF0aCBkPSJNIDAgMCBMIDI0IDAgTCAyNCAyNCBMIDAgMjQgWiIgZmlsbD0idHJhbnNwYXJlbnQiLz48cGF0aCBkPSJNIDE5LjM2NSAyMS40NCBMIDQuNzk1IDIxLjQ0IEMgMy41NzIgMjEuNDQgMi41OCAyMC40NDggMi41OCAxOS4yMjUgTCAyLjU4IDQuNjU1IEMgMi41OCAzLjQzMiAzLjU3MiAyLjQ0IDQuNzk1IDIuNDQgTCAxOS4zNjUgMi40NCBDIDIwLjU4OCAyLjQ0IDIxLjU4IDMuNDMyIDIxLjU4IDQuNjU1IEwgMjEuNTggMTkuMjI1IEMgMjEuNTggMjAuNDQ4IDIwLjU4OCAyMS40NCAxOS4zNjUgMjEuNDQgWiIgZmlsbD0idmFyKC0tdG9rZW4tZDIzZGQ1YTktYjQ4Ni00ZmEzLTgzOTQtMmNkNzk0M2YyOGRhLCByZ2IoMjgsIDI4LCAyOCkpIC8qIHsmcXVvdDtuYW1lJnF1b3Q7OiZxdW90O0RhcmsgR3JheSZxdW90O30gKi8iLz48cGF0aCBkPSJNIDUuMzk4IDYuMDk3IEwgMTAuNTA0IDEyLjkyNSBMIDUuMzY1IDE4LjQ3NiBMIDYuNTIyIDE4LjQ3NiBMIDExLjAyMSAxMy42MTYgTCAxNC42NTYgMTguNDc2IEwgMTguNTkyIDE4LjQ3NiBMIDEzLjE5OCAxMS4yNjQgTCAxNy45ODEgNi4wOTcgTCAxNi44MjUgNi4wOTcgTCAxMi42ODEgMTAuNTczIEwgOS4zMzMgNi4wOTcgWiBNIDcuMDk4IDYuOTQ5IEwgOC45MDcgNi45NDkgTCAxNi44OTEgMTcuNjI0IEwgMTUuMDgzIDE3LjYyNCBaIiBmaWxsPSJyZ2IoMjU1LDI1NSwyNTUpIi8+PC9zdmc+" alt="" />
                        <img style={{ width: "20px" }} src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M%200%200%20L%2024%200%20L%2024%2024%20L%200%2024%20Z%22%20fill%3D%22transparent%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M%2021.908%2022%20L%2021.908%2021.999%20L%2021.913%2021.999%20L%2021.913%2014.664%20C%2021.913%2011.076%2021.14%208.312%2016.945%208.312%20C%2014.929%208.312%2013.575%209.418%2013.023%2010.467%20L%2012.964%2010.467%20L%2012.964%208.647%20L%208.987%208.647%20L%208.987%2021.999%20L%2013.129%2021.999%20L%2013.129%2015.387%20C%2013.129%2013.647%2013.459%2011.963%2015.614%2011.963%20C%2017.739%2011.963%2017.77%2013.95%2017.77%2015.499%20L%2017.77%2022%20Z%20M%202.243%208.648%20L%206.389%208.648%20L%206.389%2022%20L%202.243%2022%20Z%20M%204.314%202%20C%202.989%202%201.913%203.076%201.913%204.402%20C%201.913%205.728%202.989%206.826%204.314%206.826%20C%205.64%206.826%206.716%205.728%206.716%204.402%20C%206.715%203.076%205.64%202.001%204.314%202%20Z%22%20fill%3D%22rgb(0%2C0%2C0)%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Bottom