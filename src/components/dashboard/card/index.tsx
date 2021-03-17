import React from 'react'

const Card: React.FC<{ title: string, authors: object[] }> = ( { children, title, authors } ) => {

    return (
        <div class="col-lg-6 col-xxl-4 order-1 order-xxl-2">
        <div class="card card-custom card-stretch gutter-b">
            <div class="card-header border-0">
                <h3 class="card-title font-weight-bolder text-dark"> {title} </h3>
            </div>

            <div class="card-body pt-2">
                {
                    authors.map( author => {
                        return (
                            <div class="d-flex align-items-center mb-10">
                                <div class="symbol symbol-40 symbol-light-success mr-5">
                                    <span class="symbol-label">
                                        <img src="assets/media/svg/avatars/009-boy-4.svg" class="h-75 align-self-end" alt="" />
                                    </span>
                                </div>
                                <div class="d-flex flex-column flex-grow-1 font-weight-bold">
                                    <a href="#" class="text-dark text-hover-primary mb-1 font-size-lg"> { author.name }</a>
                                    <span class="text-muted"> { author.description } </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
    )
}


export default Card;