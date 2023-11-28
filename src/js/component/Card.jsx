import React from "react";

const Card = () => {
    return (

        <div className="container-fluid text-center p-5">
            <div className="row">
                <div className="col">

                    <div className="card m1-1">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAM1BMVEXMzMyamprPz8+cnJzLy8vCwsKioqK7u7ufn5+jo6PIyMinp6fFxcW4uLjAwMCrq6uysrI9TTF1AAAEP0lEQVR4nO3Y25KkKhCFYQEPKJb4/k+7Fwgeqqtqei52jzHzfxcdjaWGJEmCNg0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMC/y9pL49L80v7lvT5f/pu3+yltHJf6//SIIa7T8dsQQ1jnb98qn94dB+ZV9xvavZ3v/5heXPpnRWOG8u/iTeIeZay6MbfN+r07lctNrJ1ct/ZYg/hwue2Xd3f4M+xgXI1B55zzvdff7cDkU7t37ntBWLbT9XfcDqzGudzuc1Dsw5X2zYIw65FKDNrRuXWykx7V54dWhsTZtoNO6T7eJLN9vrzpgjM5kbrU2baZozMxtVu1H62dVkXiTkWhDS7UGAwa7/RsGq/cic6bkNtd6cRnXZ0z6mtQCbBRSZ8v0z9zuq1xQ26vztwoEexqxqXGQKm7TeR2NCmb9czlUaNx54v22n4p8nMsKW6DCVOaSSZsv3SqMDncfju9VUz/rx79vsG5uSsxUM/LMysyGjiN47jFJCXGMRl0fMuXNI/8ixpvvYnKg6VMCd25T32efc0mBWm8zdqgoVrtHoOj9OUMsL0JZVVL3Tmumkt9UFdKcp9Z5Xw+e9gD16rPrcpDjckW43vQs2lkagwms3d0Uecae2TsXCrFxiq3U6VfzfloOXN49MblwwpFHWwVhFY3rVVAUfLfKLI/QcPRz80eg9mYfV+QYtAclXC6xCBdqPai8t4+31O/1HTSv+1+1LXNsMcg5dlNYqDR7uw1BuWXLif52xikBHJaMV8M5up7VzZFTzHQRmQvKsNdYjCPW8fe5MGnGGhyyLlGVNM0zVr6UhBexOB2eZCKQaLJPqQ17lU9KB2fn2PQpC3fu/XNrul0+7Ee3CMGGms/9n0/anvnx7E7rwtDWRdqL7svY95pbXi82zdNY9oIakGtxT+WdaHsyW+zLigG2xtMTmtNVe0PSp/L/uBYxYcvG7uQrnrqR1eDot2Qs82+9zr2B+vN9gdzKPSWMIYwl4zNgukvGXua2vWAiz7vBg9xD8qWB9O+J5rzLlqFtL4m3GafaItaD5rymtBo1csjtr8mTOXFYadfQipslwVzb6dtpS7UaPs532/Nm+60oi7n95Eb2efppMqg97p2KWne6oUvvwiO9WW6aLUspry5zhC9KrmHTs/vnSmBVFm1/0jvidsmfFIFGnT/VE9/qnPftMcgjaQLMezfC1LJGGP0Lu//D+u2gkz69TQbyuVxrKtmq1ctH6P2EtucSvlQ7n+zNDjV6/qdp+a4XfryYeh8flr08hyxKpXnOZLa23ei2sX49N1oddfvVLdxikHTrb2G7sjweR29D8MlCzT8/Vb80mS5TBKd7vzp+2M7BO/60/fIRUnl4y32BlfnjwD26cPvc7sc+/Lf+fRP17+6HwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC/23//YCAONCnS2gAAAABJRU5ErkJggg==" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>

                    </div>
                </div>
                <div className="col m-1">
                    <div className="card">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAM1BMVEXMzMyamprPz8+cnJzLy8vCwsKioqK7u7ufn5+jo6PIyMinp6fFxcW4uLjAwMCrq6uysrI9TTF1AAAEP0lEQVR4nO3Y25KkKhCFYQEPKJb4/k+7Fwgeqqtqei52jzHzfxcdjaWGJEmCNg0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMC/y9pL49L80v7lvT5f/pu3+yltHJf6//SIIa7T8dsQQ1jnb98qn94dB+ZV9xvavZ3v/5heXPpnRWOG8u/iTeIeZay6MbfN+r07lctNrJ1ct/ZYg/hwue2Xd3f4M+xgXI1B55zzvdff7cDkU7t37ntBWLbT9XfcDqzGudzuc1Dsw5X2zYIw65FKDNrRuXWykx7V54dWhsTZtoNO6T7eJLN9vrzpgjM5kbrU2baZozMxtVu1H62dVkXiTkWhDS7UGAwa7/RsGq/cic6bkNtd6cRnXZ0z6mtQCbBRSZ8v0z9zuq1xQ26vztwoEexqxqXGQKm7TeR2NCmb9czlUaNx54v22n4p8nMsKW6DCVOaSSZsv3SqMDncfju9VUz/rx79vsG5uSsxUM/LMysyGjiN47jFJCXGMRl0fMuXNI/8ixpvvYnKg6VMCd25T32efc0mBWm8zdqgoVrtHoOj9OUMsL0JZVVL3Tmumkt9UFdKcp9Z5Xw+e9gD16rPrcpDjckW43vQs2lkagwms3d0Uecae2TsXCrFxiq3U6VfzfloOXN49MblwwpFHWwVhFY3rVVAUfLfKLI/QcPRz80eg9mYfV+QYtAclXC6xCBdqPai8t4+31O/1HTSv+1+1LXNsMcg5dlNYqDR7uw1BuWXLif52xikBHJaMV8M5up7VzZFTzHQRmQvKsNdYjCPW8fe5MGnGGhyyLlGVNM0zVr6UhBexOB2eZCKQaLJPqQ17lU9KB2fn2PQpC3fu/XNrul0+7Ee3CMGGms/9n0/anvnx7E7rwtDWRdqL7svY95pbXi82zdNY9oIakGtxT+WdaHsyW+zLigG2xtMTmtNVe0PSp/L/uBYxYcvG7uQrnrqR1eDot2Qs82+9zr2B+vN9gdzKPSWMIYwl4zNgukvGXua2vWAiz7vBg9xD8qWB9O+J5rzLlqFtL4m3GafaItaD5rymtBo1csjtr8mTOXFYadfQipslwVzb6dtpS7UaPs532/Nm+60oi7n95Eb2efppMqg97p2KWne6oUvvwiO9WW6aLUspry5zhC9KrmHTs/vnSmBVFm1/0jvidsmfFIFGnT/VE9/qnPftMcgjaQLMezfC1LJGGP0Lu//D+u2gkz69TQbyuVxrKtmq1ctH6P2EtucSvlQ7n+zNDjV6/qdp+a4XfryYeh8flr08hyxKpXnOZLa23ei2sX49N1oddfvVLdxikHTrb2G7sjweR29D8MlCzT8/Vb80mS5TBKd7vzp+2M7BO/60/fIRUnl4y32BlfnjwD26cPvc7sc+/Lf+fRP17+6HwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC/23//YCAONCnS2gAAAABJRU5ErkJggg==" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>

                    </div>
                </div>
                <div className="col m-1">
                    <div className="card">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAM1BMVEXMzMyamprPz8+cnJzLy8vCwsKioqK7u7ufn5+jo6PIyMinp6fFxcW4uLjAwMCrq6uysrI9TTF1AAAEP0lEQVR4nO3Y25KkKhCFYQEPKJb4/k+7Fwgeqqtqei52jzHzfxcdjaWGJEmCNg0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMC/y9pL49L80v7lvT5f/pu3+yltHJf6//SIIa7T8dsQQ1jnb98qn94dB+ZV9xvavZ3v/5heXPpnRWOG8u/iTeIeZay6MbfN+r07lctNrJ1ct/ZYg/hwue2Xd3f4M+xgXI1B55zzvdff7cDkU7t37ntBWLbT9XfcDqzGudzuc1Dsw5X2zYIw65FKDNrRuXWykx7V54dWhsTZtoNO6T7eJLN9vrzpgjM5kbrU2baZozMxtVu1H62dVkXiTkWhDS7UGAwa7/RsGq/cic6bkNtd6cRnXZ0z6mtQCbBRSZ8v0z9zuq1xQ26vztwoEexqxqXGQKm7TeR2NCmb9czlUaNx54v22n4p8nMsKW6DCVOaSSZsv3SqMDncfju9VUz/rx79vsG5uSsxUM/LMysyGjiN47jFJCXGMRl0fMuXNI/8ixpvvYnKg6VMCd25T32efc0mBWm8zdqgoVrtHoOj9OUMsL0JZVVL3Tmumkt9UFdKcp9Z5Xw+e9gD16rPrcpDjckW43vQs2lkagwms3d0Uecae2TsXCrFxiq3U6VfzfloOXN49MblwwpFHWwVhFY3rVVAUfLfKLI/QcPRz80eg9mYfV+QYtAclXC6xCBdqPai8t4+31O/1HTSv+1+1LXNsMcg5dlNYqDR7uw1BuWXLif52xikBHJaMV8M5up7VzZFTzHQRmQvKsNdYjCPW8fe5MGnGGhyyLlGVNM0zVr6UhBexOB2eZCKQaLJPqQ17lU9KB2fn2PQpC3fu/XNrul0+7Ee3CMGGms/9n0/anvnx7E7rwtDWRdqL7svY95pbXi82zdNY9oIakGtxT+WdaHsyW+zLigG2xtMTmtNVe0PSp/L/uBYxYcvG7uQrnrqR1eDot2Qs82+9zr2B+vN9gdzKPSWMIYwl4zNgukvGXua2vWAiz7vBg9xD8qWB9O+J5rzLlqFtL4m3GafaItaD5rymtBo1csjtr8mTOXFYadfQipslwVzb6dtpS7UaPs532/Nm+60oi7n95Eb2efppMqg97p2KWne6oUvvwiO9WW6aLUspry5zhC9KrmHTs/vnSmBVFm1/0jvidsmfFIFGnT/VE9/qnPftMcgjaQLMezfC1LJGGP0Lu//D+u2gkz69TQbyuVxrKtmq1ctH6P2EtucSvlQ7n+zNDjV6/qdp+a4XfryYeh8flr08hyxKpXnOZLa23ei2sX49N1oddfvVLdxikHTrb2G7sjweR29D8MlCzT8/Vb80mS5TBKd7vzp+2M7BO/60/fIRUnl4y32BlfnjwD26cPvc7sc+/Lf+fRP17+6HwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC/23//YCAONCnS2gAAAABJRU5ErkJggg==" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>

                    </div>
                </div>
                <div className="col m-1">
                    <div className="card">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAM1BMVEXMzMyamprPz8+cnJzLy8vCwsKioqK7u7ufn5+jo6PIyMinp6fFxcW4uLjAwMCrq6uysrI9TTF1AAAEP0lEQVR4nO3Y25KkKhCFYQEPKJb4/k+7Fwgeqqtqei52jzHzfxcdjaWGJEmCNg0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMC/y9pL49L80v7lvT5f/pu3+yltHJf6//SIIa7T8dsQQ1jnb98qn94dB+ZV9xvavZ3v/5heXPpnRWOG8u/iTeIeZay6MbfN+r07lctNrJ1ct/ZYg/hwue2Xd3f4M+xgXI1B55zzvdff7cDkU7t37ntBWLbT9XfcDqzGudzuc1Dsw5X2zYIw65FKDNrRuXWykx7V54dWhsTZtoNO6T7eJLN9vrzpgjM5kbrU2baZozMxtVu1H62dVkXiTkWhDS7UGAwa7/RsGq/cic6bkNtd6cRnXZ0z6mtQCbBRSZ8v0z9zuq1xQ26vztwoEexqxqXGQKm7TeR2NCmb9czlUaNx54v22n4p8nMsKW6DCVOaSSZsv3SqMDncfju9VUz/rx79vsG5uSsxUM/LMysyGjiN47jFJCXGMRl0fMuXNI/8ixpvvYnKg6VMCd25T32efc0mBWm8zdqgoVrtHoOj9OUMsL0JZVVL3Tmumkt9UFdKcp9Z5Xw+e9gD16rPrcpDjckW43vQs2lkagwms3d0Uecae2TsXCrFxiq3U6VfzfloOXN49MblwwpFHWwVhFY3rVVAUfLfKLI/QcPRz80eg9mYfV+QYtAclXC6xCBdqPai8t4+31O/1HTSv+1+1LXNsMcg5dlNYqDR7uw1BuWXLif52xikBHJaMV8M5up7VzZFTzHQRmQvKsNdYjCPW8fe5MGnGGhyyLlGVNM0zVr6UhBexOB2eZCKQaLJPqQ17lU9KB2fn2PQpC3fu/XNrul0+7Ee3CMGGms/9n0/anvnx7E7rwtDWRdqL7svY95pbXi82zdNY9oIakGtxT+WdaHsyW+zLigG2xtMTmtNVe0PSp/L/uBYxYcvG7uQrnrqR1eDot2Qs82+9zr2B+vN9gdzKPSWMIYwl4zNgukvGXua2vWAiz7vBg9xD8qWB9O+J5rzLlqFtL4m3GafaItaD5rymtBo1csjtr8mTOXFYadfQipslwVzb6dtpS7UaPs532/Nm+60oi7n95Eb2efppMqg97p2KWne6oUvvwiO9WW6aLUspry5zhC9KrmHTs/vnSmBVFm1/0jvidsmfFIFGnT/VE9/qnPftMcgjaQLMezfC1LJGGP0Lu//D+u2gkz69TQbyuVxrKtmq1ctH6P2EtucSvlQ7n+zNDjV6/qdp+a4XfryYeh8flr08hyxKpXnOZLa23ei2sX49N1oddfvVLdxikHTrb2G7sjweR29D8MlCzT8/Vb80mS5TBKd7vzp+2M7BO/60/fIRUnl4y32BlfnjwD26cPvc7sc+/Lf+fRP17+6HwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC/23//YCAONCnS2gAAAABJRU5ErkJggg==" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card