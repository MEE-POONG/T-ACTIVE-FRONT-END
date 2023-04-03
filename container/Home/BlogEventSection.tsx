import { Container, Row, Col, Table } from 'react-bootstrap';

function BlogEventSection() {
  return (
    <section className="schedule-section section-padding" id="section_4">
      <Container>
        <Row>
          <Col xs={12} className="text-center">
            <h1 className="text-white f-s-cookie mb-4">Event & Blog</h1>
            <div className="table-responsive">
              <Table className="schedule-table" variant="dark">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">April<br />2</th>
                    <td className="table-background-image-wrap pop-background-image">
                      <h3>Pop Night</h3>
                      <p className="mb-2">5:00 - 7:00 PM</p>
                      <p>By Adele</p>
                      <div className="section-overlay"></div>
                    </td>
                    <td style={{ backgroundColor: '#F3DCD4' }}></td>
                    <td className="table-background-image-wrap rock-background-image">
                      <h3>Rock &amp; Roll</h3>
                      <p className="mb-2">7:00 - 11:00 PM</p>
                      <p>By Rihana</p>
                      <div className="section-overlay"></div>
                    </td>
                    <td className="table-background-image-wrap pop-background-image">
                      <h3>Pop Night</h3>
                      <p className="mb-2">5:00 - 7:00 PM</p>
                      <p>By Adele</p>
                      <div className="section-overlay"></div>
                    </td>
                    <td style={{ backgroundColor: '#F3DCD4' }}></td>
                    <td className="table-background-image-wrap rock-background-image">
                      <h3>Rock &amp; Roll</h3>
                      <p className="mb-2">7:00 - 11:00 PM</p>
                      <p>By Rihana</p>
                      <div className="section-overlay"></div>
                    </td>
                    <td className="table-background-image-wrap pop-background-image">
                      <h3>Pop Night</h3>
                      <p className="mb-2">5:00 - 7:00 PM</p>
                      <p>By Adele</p>
                      <div className="section-overlay"></div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">April<br />9</th>
                    <td style={{ backgroundColor: '#ECC9C7' }}></td>
                    <td>
                      <h3>DJ Night</h3>
                      <p className="mb-2">6:30 - 9:30 PM</p>
                      <p>By Rihana</p>
                    </td>
                    <td style={{ backgroundColor: '#D9E3DA' }}></td>
                    <td className="table-background-image-wrap pop-background-image">
                      <h3>Pop Night</h3>
                      <p className="mb-2">5:00 - 7:00 PM</p>
                      <p>By Adele</p>
                      <div className="section-overlay"></div>
                    </td>
                    <td className="table-background-image-wrap pop-background-image">
                      <h3>Pop Night</h3>
                      <p className="mb-2">5:00 - 7:00 PM</p>
                      <p>By Adele</p>
                      <div className="section-overlay"></div>
                    </td>
                    <td className="table-background-image-wrap pop-background-image">
                      <h3>Pop Night</h3>
                      <p className="mb-2">5:00 - 7:00 PM</p>
                      <p>By Adele</p>
                      <div className="section-overlay"></div>
                    </td>
                    <td className="table-background-image-wrap pop-background-image">
                      <h3>Pop Night</h3>
                      <p className="mb-2">5:00 - 7:00 PM</p>
                      <p>By Adele</p>
                      <div className="section-overlay"></div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">April<br />16</th>
                    <td className="table-background-image-wrap country-background-image">
                      <h3>Country Music</h3>
                      <p className="mb-2">4:30 - 7:30 PM</p>
                      <p>By Rihana</p>
                      <div className="section-overlay"></div>
                    </td>
                    <td style={{ backgroundColor: '#D1CFC0' }}></td>
                    <td>
                      <h3>Free Styles</h3>
                      <p className="mb-2">6:00 - 10:00 PM</p>
                      <p>By Members</p>
                    </td>
                    <td className="table-background-image-wrap pop-background-image">
                      <h3>Pop Night</h3>
                      <p className="mb-2">5:00 - 7:00 PM</p>
                      <p>By Adele</p>
                      <div className="section-overlay"></div>
                    </td>
                    <td className="table-background-image-wrap pop-background-image">
                      <h3>Pop Night</h3>
                      <p className="mb-2">5:00 - 7:00 PM</p>
                      <p>By Adele</p>
                      <div className="section-overlay"></div>
                    </td>
                    <td className="table-background-image-wrap pop-background-image">
                      <h3>Pop Night</h3>
                      <p className="mb-2">5:00 - 7:00 PM</p>
                      <p>By Adele</p>
                      <div className="section-overlay"></div>
                    </td>
                    <td className="table-background-image-wrap pop-background-image">
                      <h3>Pop Night</h3>
                      <p className="mb-2">5:00 - 7:00 PM</p>
                      <p>By Adele</p>
                      <div className="section-overlay"></div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
        <div className="calendar">
          <div className="weekdays">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div className="days">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default BlogEventSection;
