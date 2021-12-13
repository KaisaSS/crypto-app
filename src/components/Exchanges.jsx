import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";
import { useGetExchangesQuery } from "../services/cryptoApi";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  console.log(data);
  const exchangeList = data?.data?.exchanges;

  if (isFetching) return "Loading...";

  return (
    <>
      <Row className="top-row">
        <Col span={6} className="exchange-toprow exchange-item-first">
          Exchanges
        </Col>
        <Col span={6} className="exchange-toprow">
          24h Trade Volume
        </Col>
        <Col span={6} className="exchange-toprow">
          Markets
        </Col>
        <Col span={6} className="exchange-toprow">
          Change
        </Col>
      </Row>
      <Row className="exchange-row">
        {exchangeList.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.id}
                showArrow={false}
                header={
                  <Row key={exchange.id} className="exchange-row">
                    <Col span={6} className="exchange-item-first">
                      <Text>
                        <strong>{exchange.rank}.</strong>
                      </Text>
                      <Avatar className="exchange-image" src={exchange.iconUrl} />
                      <Text>
                        <strong>{exchange.name}</strong>
                      </Text>
                    </Col>
                    <Col span={6} className="exchange-item">
                      ${millify(exchange.volume)}
                    </Col>
                    <Col span={6} className="exchange-item">
                      {millify(exchange.numberOfMarkets)}
                    </Col>
                    <Col span={6} className="exchange-item">
                      {millify(exchange.marketShare)}%
                    </Col>
                  </Row>
                }
              >
                {HTMLReactParser(exchange.description || "")}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
