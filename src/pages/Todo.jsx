import React from 'react'
import styles from '../css/todo.module.css'
const Todo = () => {
    return (
        <div>
            <div className={`row ${styles.mainBackgroundContainerTodo}`}>
                <div className={`col-12 col-lg-6`}>
                    <div className="position-relative d-flex flex-lg-row flex-column">
                        <div className={`container p-lg-5 p-4 d-flex flex-column justify-content-center align-items-center ${styles.leftContainer}`}>
                            <h2>TODO</h2>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reprehenderit consequuntur reiciendis culpa, mollitia totam corrupti consequatur debitis, atque rem nostrum placeat libero necessitatibus? Ut quaerat laborum a atque fugit!</p>
                            <div class="form-floating mb-3 w-50">
                                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Title</label>
                            </div>
                            <div class="form-floating w-50">
                                <input type="text" class="form-control" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Description</label>
                            </div>
                            <button className='mt-3 btn btn-primary w-50'>Add</button>
                        </div>
                        <div className={`vr ${styles.vr}`}></div>
                    </div>
                </div>
                <div className={`col-12 col-lg-6 d-lg-block position-relative  ${styles.rightContainer}`}>
                    <div className="container pt-5 px-3">
                        <h3>TODO LIST</h3>
                        <div className="d-flex justify-content-between mt-4">
                            <div class="mb-3">
                                <input
                                    type="search"
                                    class="form-control"
                                    name=""
                                    id=""
                                    aria-describedby="helpId"
                                    placeholder="search"
                                />
                            </div>
                            <div class="mb-3">
                                <select
                                    class="form-select"
                                    name=""
                                    id=""
                                >
                                    <option selected disabled>Filter by</option>
                                    <option value="">New Delhi</option>
                                    <option value="">Istanl</option>
                                    <option value="">Jakarta</option>
                                </select>
                            </div>

                        </div>

                        <div className="lists">
                            <div
                                class="table-responsive"
                            >
                                <table
                                    class="table"
                                >

                                    <tbody>
                                        {Array.from({ length: 4 }, (_, i) => (
                                            <tr key={i} className="">
                                                <td scope="row">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="left">
                                                            <b>Title {i+1}</b>
                                                            <br />
                                                            <small>Description {i+1}</small>
                                                        </div>
                                                        <div className="right">
                                                            <i className="bi bi-three-dots-vertical"></i>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Todo