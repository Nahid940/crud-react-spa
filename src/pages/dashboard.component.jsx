import React, { Component } from 'react'

const Dashboard=()=>
{
    return(
        <div className="row">
					<div className="col-lg-7">
						<div className="panel panel-flat">
							<div className="panel-heading">
								<h6 className="panel-title">Traffic sources</h6>
								<div className="heading-elements">
									
								</div>
							</div>

							<div className="container-fluid">
								<div className="row">
									<div className="col-lg-4">
										<ul className="list-inline text-center">
											<li>
												<a href="#" className="btn border-teal text-teal btn-flat btn-rounded btn-icon btn-xs valign-text-bottom"><i className="icon-plus3"></i></a>
											</li>
											<li className="text-left">
												<div className="text-semibold">New visitors</div>
												<div className="text-muted">2,349 avg</div>
											</li>
										</ul>

										<div className="col-lg-10 col-lg-offset-1">
											<div className="content-group" id="new-visitors"></div>
										</div>
									</div>

									<div className="col-lg-4">
										<ul className="list-inline text-center">
											<li>
												<a href="#" className="btn border-warning-400 text-warning-400 btn-flat btn-rounded btn-icon btn-xs valign-text-bottom"><i className="icon-watch2"></i></a>
											</li>
											<li className="text-left">
												<div className="text-semibold">New sessions</div>
												<div className="text-muted">08:20 avg</div>
											</li>
										</ul>

										<div className="col-lg-10 col-lg-offset-1">
											<div className="content-group" id="new-sessions"></div>
										</div>
									</div>

									<div className="col-lg-4">
										<ul className="list-inline text-center">
											<li>
												<a href="#" className="btn border-indigo-400 text-indigo-400 btn-flat btn-rounded btn-icon btn-xs valign-text-bottom"><i className="icon-people"></i></a>
											</li>
											<li className="text-left">
												<div className="text-semibold">Total online</div>
												<div className="text-muted"><span className="status-mark border-success position-left"></span> 5,378 avg</div>
											</li>
										</ul>

										<div className="col-lg-10 col-lg-offset-1">
											<div className="content-group" id="total-online"></div>
										</div>
									</div>
								</div>
							</div>

							<div className="position-relative" id="traffic-sources"></div>
						</div>
					</div>
				</div>
    )
}

export default Dashboard