import React, { FC } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { event, blog } from './../../data/test';

const BlogEventSection: FC = () => {
  const numRows = 3;
  const numCols = 7;
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('default', { hour: '2-digit', minute: '2-digit' }).format(date);
  };
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { day: '2-digit', month: 'short' });
  };
  const renderTableRows = () => {
    const rows = [];

    for (let i = 0; i < numRows; i++) {
      const cells = [];
      for (let j = 0; j < numCols; j++) {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + (i * numCols) + j);
        const currentDateString = currentDate.toISOString().split('T')[0];

        const eventsOnDate = event.filter(e => e.start.split('T')[0] === currentDateString);
        const blogsOnDate = blog.filter(b => b.start.split('T')[0] === currentDateString);

        const items = eventsOnDate.map(e => ({ ...e, type: 'Event' })).concat(blogsOnDate.map(b => ({ ...b, type: 'Blog' })));

        const cellContent = items.map(item => (
          <div key={`${item.type}-${item.id}`} className="content">
            <h5>{item.type} : {item.title}</h5>
            <p className="mb-2">{formatTime(item.start)} - {formatTime(item.start)} PM</p>
            <p>By Adele</p>
            <div>{formatDate(item.start)}</div>
            <div className="section-overlay"></div>
          </div>
        ));

        const backgroundImg = eventsOnDate[0]?.img || blogsOnDate[0]?.img;

        if (cellContent.length > 0) {
          cells.push(
            <td
              key={`cell-${i}-${j}`}
              className="table-background-image-wrap pop-background-image"
              style={{
                backgroundImage: backgroundImg ? `url(${backgroundImg})` : '',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '150px',
              }}
            >
              {cellContent}
            </td>
          );
        } else {
          cells.push(<td key={`cell-${i}-${j}`} style={{ backgroundColor: '#F3DCD4', height: '150px' }}></td>);
        }
      }
      rows.push(<tr key={`row-${i}`}>{cells}</tr>);
    }

    return rows;
  };




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
                    <td className="table-background-image-wrap pop-background-image">
                      <h3>Pop Night</h3>
                      <p className="mb-2">5:00 - 7:00 PM</p>
                      <p>By Adele</p>
                      <div>12 may</div>
                      <div className="section-overlay"></div>
                    </td>
                    <td style={{ backgroundColor: '#F3DCD4' }}></td>
                    <td className="table-background-image-wrap rock-background-image">
                      <h3>Rock &amp; Roll</h3>
                      <p className="mb-2">7:00 - 11:00 PM</p>
                      <p>By Rihana</p>
                      <div>12 may</div>
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
                  {renderTableRows()}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogEventSection;
