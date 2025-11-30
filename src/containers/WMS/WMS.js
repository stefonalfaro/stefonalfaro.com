import React from "react";
import Header from "../../components/header/Header";
import "./WMS.scss";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { StyleProvider } from "../../contexts/StyleContext";
import Footer from "../../components/footer/Footer";

export default function WMS() {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);

  const changeTheme = () => {
    setIsDark(!isDark);
  };
  
  return (
      <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <div className="WMS">
            <h1>Warehouse Management System</h1>
                <ul>
                    <li>
                        <b>GAPP WMS</b>
                    </li>
                    <li>Lead Developer</li>
                    <ul>
                        <li>stefon@gappexpress.com</li>
                    </ul>
                </ul>

                <h2 style={{marginTop:"4rem"}}>Table of Contents</h2>
                <ul>
                    <li><a href="#ArchitectureandInfastructure">Architecture and Infrastructure</a></li>
                    <li><a href="#MasterInventory">Master Inventory (SKU Setup)</a></li>
                    <li><a href="#InboundShipments">Inbound Shipments (Receiving)</a></li>
                    <li><a href="#Orders">Orders (Shipping)</a></li>
                    <li><a href="#eCommerce">E-Commerce Platform Integrations (Shopify & WooCommerce)</a></li>
                    <li><a href="#Shipping">Shipping Module (Carrier Integrations)</a></li>
                    <li><a href="#UserAccounts">User Accounts & Roles</a></li>
                    <li><a href="#API">API & Integration Options</a></li>
                    <li><a href="#EDI">EDI Services</a></li>
                </ul>

                <h2 style={{marginTop:"4rem"}} id="ArchitectureandInfastructure">Architecture and Infastructure</h2>
                <ul>
                    <li>
                    <b>Frontend:</b>
                    </li>
                    <ul>
                    <li>Built with Angular</li>
                    <li>Fully responsive, modern web interface</li>
                    <li>SignalR (websockets) for live updates from backend</li>
                    </ul>
                    <li>
                    <b>Backend:</b>
                    </li>
                    <ul>
                    <li>.NET Web API</li>
                    <li>Same API powers the frontend and is available for external integrations (e.g., clients auto-creating orders)</li>
                    </ul>
                    <li>
                    <b>Database:</b>
                    </li>
                    <ul>
                    <li>SQL Server</li>
                    <li>SQL Server Reporting Services (SSRS) for easy report creation via Report Builder</li>
                    <li>Flexible for both your team and client developers to add reports</li>
                    </ul>
                    <li>
                    <b>Mobile:</b>
                    </li>
                    <ul>
                    <li>Also built with Angular</li>
                    <li>Currently browser-based but could be packaged into an Android app via Cordova or similar</li>
                    </ul>
                    <li>
                    <b>Hosting & Infrastructure:</b>
                    </li>
                    <ul>
                    <li>Currently hosted on your own Canadian data center</li>
                    <li>Two servers with a failover setup for high availability</li>
                    <li>Backups and strong uptime</li>
                    <li>Could also be cloud-hosted if needed</li>
                    <li>Expected capacity: ~1,000 users across maybe ~100 organizations</li>
                    </ul>
                </ul>

                <h2 style={{marginTop:"4rem"}} id="MasterInventory">Master Inventory (SKU Setup)</h2>
                <ul>
                    <li>
                    <b>Master Inventory / SKU Setup:</b>
                    </li>
                    <li>Every SKU must be defined in the system <i>before</i> receiving any inbound shipments. </li>
                    <li>Each SKU includes attributes like:</li>
                    <ul>
                    <li>Description</li>
                    <ul>
                        <li>GTIN</li>
                        <li>UPC</li>
                        <li>Any other identifiers needed for scanning or integrations</li>
                    </ul>
                    </ul>
                    <li>
                    <b>Unit of Measure (UOM) Structure:</b>
                    </li>
                    <ul>
                    <li>You support <b>recursive unit-of-measure hierarchies</b>, not just simple case → pallet relationships. </li>
                    <li>Example:</li>
                    <ul>
                        <li>1 case = 12 apples</li>
                        <li>1 pallet = 20 cases</li>
                        <li>And you could define additional layers if needed (inner packs, master cartons, etc.).</li>
                    </ul>
                    <li>This recursion allows extremely flexible packaging configurations without breaking your receiving or picking workflows.</li>
                    </ul>
                    <li>
                    <b>Purpose of UOM definitions:</b>
                    </li>
                    <ul>
                    <li>Enables the system to translate quantities at any level (pallets ↔ cases ↔ eaches) automatically.</li>
                    <li>Critical for:</li>
                    <ul>
                        <li>
                        <b>Receiving:</b> accurately receiving pallets/cases and knowing the true counts.
                        </li>
                        <li>
                        <b>Putaway:</b> scanning a code on a case/pallet and having the system understand how many units are being placed.
                        </li>
                        <li>
                        <b>Order fulfillment:</b> later when picking, the system knows exactly which UOM is being picked or shipped.
                        </li>
                    </ul>
                    </ul>
                    <li>
                    <b>Barcode support:</b>
                    </li>
                    <ul>
                    <li>GTIN/UPC is captured at the UOM level, so mobile users can scan any packaging type (case barcode, inner pack barcode, pallet barcode if labeled).</li>
                    <li>This ties directly into the inbound workflow you described earlier: scanning SKUs to validate and count items on receipt.</li>
                    </ul>
                </ul>

                <h2 style={{marginTop:"4rem"}} id="InboundShipments">Inbound Shipments (Receiving)</h2>
                <ul>
                    <li>
                    <b>Multi-client warehouse model:</b>
                    </li>
                    <ul>
                    <li>Your system can maintain multiple “virtual warehouses” (Warehouse A, B, C, etc.) within the same physical facility.</li>
                    <li>All inbound, outbound, inventory, and reporting are isolated per client warehouse.</li>
                    </ul>
                    <li>
                    <b>Inbound shipment workflow:</b>
                    </li>
                    <ul>
                    <li>An inbound shipment represents what a client is sending—or what the warehouse owner expects to receive—based on a purchase order or ASN.</li>
                    <li>Each shipment lists the SKUs and expected quantities (e.g., 5 pallets, 1,000 boxes).</li>
                    </ul>
                    <li>
                    <b>Receiving process:</b>
                    </li>
                    <ul>
                    <li>When the load arrives at the dock, staff begin counting the physical items.</li>
                    <li>They can count via:</li>
                    <ul>
                        <li>Manual input, or</li>
                        <li>The mobile app by scanning SKU barcodes or serial numbers.</li>
                    </ul>
                    <li>The system compares <b>expected vs. received</b> quantities to detect overages or shortages (e.g., PO says 1,000 but only 950 arrived). </li>
                    </ul>
                    <li>
                    <b>Putaway:</b>
                    </li>
                    <ul>
                    <li>After receiving, the items are moved from “receiving” to actual warehouse locations.</li>
                    <li>Putaway is usually done directly within the inbound shipment workflow.</li>
                    <li>Users can distribute the received quantity across multiple storage locations (e.g., 100 to A1A, 100 to A1B, etc.).</li>
                    <li>Once putaway is complete, the inbound shipment can be marked as fully received and inventory is created/updated.</li>
                    </ul>
                </ul>

                <h2 style={{marginTop:"4rem"}} id="Orders">Orders (Shipping)</h2>
                <ul>
                    <li>
                    <b>Order Creation</b>
                    </li>
                    <ul>
                    <li>Orders can be:</li>
                    <ul>
                        <li>
                        <b>Manually created</b>, or
                        </li>
                        <li>
                        <b>Automatically created via EDI 940</b> (the standard method for your 3PL use case).
                        </li>
                    </ul>
                    <li>A typical order includes:</li>
                    <ul>
                        <li>Ship-to information</li>
                        <li>Order line items (SKU + quantity + UOM)</li>
                    </ul>
                    <li>EDI automation is crucial because many retailers or vendors require EDI compliance for supply-chain participation.</li>
                    </ul>
                    <li>
                    <b>Allocation</b>
                    </li>
                    <ul>
                    <li>Once an order is created, the system <b>allocates inventory</b> immediately. </li>
                    <li>Allocation logic is <b>FIFO</b> (oldest batch/location first). </li>
                    <li>Example:</li>
                    <ul>
                        <li>Order requests 200 units</li>
                        <ul>
                        <li>100 allocated from A1A</li>
                        <li>100 allocated from A1B</li>
                        </ul>
                    </ul>
                    <li>The purpose of allocation is:</li>
                    <ul>
                        <li>To confirm the order is fulfillable</li>
                        <li>To generate accurate picking instructions</li>
                    </ul>
                    </ul>
                    <li>
                    <b>Pick Ticket Generation</b>
                    </li>
                    <ul>
                    <li>Allocation feeds a <b>pick ticket report</b> (PDF). </li>
                    <ul>
                        <li>The pick ticket lists the precise warehouse locations workers must visit.</li>
                        <li>Locations are ordered logically (A1 → A2 → … → B1, etc.) for efficient route planning.</li>
                    </ul>
                    </ul>
                    <li>
                    <b>Picking Process (Mobile App)</b>
                    </li>
                    <ul>
                    <li>Pick sheet has a <b>barcode</b>, scanned by the worker. </li>
                    <li>The mobile app then:</li>
                    <ul>
                        <li>Guides the worker through locations in optimal sequence</li>
                        <li>Displays the required SKU and quantity at each stop</li>
                    </ul>
                    <li>Picking is normally done entirely through the mobile interface.</li>
                    </ul>
                    <li>
                    <b>Staging</b>
                    </li>
                    <ul>
                    <li>After items are picked, they must be moved to a dock or staging area.</li>
                    <li>Staging can be:</li>
                    <ul>
                        <li>A separate workflow, <b>or</b>
                        </li>
                        <li>Done as part of the picking scan process</li>
                    </ul>
                    <li>Worker scans the dock barcode (e.g., Dock A) to indicate where the order is staged and ready for shipment.</li>
                    </ul>
                    <li>
                    <b>GS1 Labeling + Audit Trail</b>
                    </li>
                    <ul>
                    <li>For retailers requiring EDI 856 (ASN), GS1 labels must be applied to cartons/pallets.</li>
                    <li>During staging:</li>
                    <ul>
                        <li>Worker scans the <b>UPC/GTIN</b>
                        </li>
                        <li>Then scans the <b>GS1 label</b> applied to the carton/pallet </li>
                    </ul>
                    <li>This creates a detailed, item-level audit trail.</li>
                    <ul>
                        <li>If a retailer claims under-delivery (e.g., they say 900 but you shipped 1,000), you can prove:</li>
                        <ul>
                        <li>1,000 GS1 labels were scanned</li>
                        <li>Associated SKUs were confirmed</li>
                        <li>Scanned at specific times</li>
                        <li>Staged at specific dock locations</li>
                        </ul>
                    </ul>
                    <li>It’s a powerful accuracy and compliance mechanism.</li>
                    </ul>
                    <li>
                    <b>Packing Module</b>
                    </li>
                    <ul>
                    <li>Some clients specify a <b>requested pack quantity</b> in the EDI 940. </li>
                    <ul>
                        <li>Example: Order 1,000 units of Apple</li>
                        <li>Requested pack quantity = 8 per case</li>
                        <li>This tells the 3PL how many units belong in each physical package/carton.</li>
                    </ul>
                    <li>The purpose of this is tied directly to the retailer requirements for the <b>EDI 856</b> (ASN). </li>
                    <li>
                        <b>Why Packing Matters</b>
                    </li>
                    <ul>
                        <li>
                        <b>EDI 945 (shipment confirmation)</b>
                        </li>
                        <ul>
                        <li>Sent back to your client</li>
                        <li>Confirms <i>what</i> was shipped </li>
                        <li>Does <b>not</b> include package-level detail </li>
                        </ul>
                        <li>
                        <b>EDI 856 (advanced ship notice)</b>
                        </li>
                        <ul>
                        <li>Sent to the retailer (Walmart, Amazon, etc.)</li>
                        <li>Requires very specific <b>package-level hierarchy</b>: </li>
                        <ul>
                            <li>Carton/pallet ID (SSCC)</li>
                            <li>What items and quantities are in each package</li>
                            <li>GS1 label data</li>
                        </ul>
                        <li>Accurate packing information is mandatory to avoid chargebacks or supply chain noncompliance.</li>
                        </ul>
                    </ul>
                    <li>
                        <b>How Your System Handles Packing</b>
                    </li>
                    <ul>
                        <li>Packing is normally <b>automatic</b> because: </li>
                        <ul>
                        <li>Quantity ordered is known</li>
                        <li>Pack size is defined</li>
                        <li>Required number of packages is simply: <p>
                            <br />
                            <b>Total units ÷ Pack size</b>
                            <br />
                            </p>
                        </li>
                        </ul>
                        <li>The system then:</li>
                        <ul>
                        <li>Determines how many cases or cartons are needed</li>
                        <li>Prepares the expected packaging hierarchy</li>
                        <li>Ensures that GS1/SSCC labels can be generated and tied to those packages during staging</li>
                        </ul>
                    </ul>
                    </ul>
                </ul>

                <h2 style={{marginTop:"4rem"}} id="eCommerce">E-Commerce Platform Integrations (Shopify & WooCommerce)</h2>
                <ul>
            <li>
                <b>Automatic Order Creation</b>
            </li>
            <ul>
                <li>When a customer places an order on Shopify or WooCommerce:</li>
                <ul>
                <li>Your system receives it through the platform’s API.</li>
                <li>A corresponding order is created automatically in your WMS.</li>
                <li>The order is routed to the correct <b>virtual warehouse</b> for that specific client. <p>
                    <br /> This allows your 3PL to handle e-commerce fulfillment without the client having to manually submit orders or build custom connectors. <br />
                    </p>
                </li>
                </ul>
            </ul>
            <li>
                <b>Automatic Tracking Number Updates</b>
            </li>
            <ul>
                <li>Once the order is picked, packed, staged, and shipped:</li>
                <ul>
                <li>Your system sends the <b>tracking number</b> back to Shopify or WooCommerce via API. </li>
                <li>The client’s online store updates automatically, and their customer receives fulfillment info immediately.</li>
                </ul>
            </ul>
            <li>
                <b>Inventory Synchronization</b>
            </li>
            <ul>
                <li>When inventory changes in your warehouse:</li>
                <ul>
                <li>The updated quantity can be pushed back to Shopify/WooCommerce.</li>
                </ul>
                <li>This prevents:</li>
                <ul>
                <li>Overselling items that are out of stock</li>
                <li>Incorrect backorder expectations</li>
                </ul>
                <li>Essentially, your WMS becomes the <b>source of truth</b> for stock levels. </li>
            </ul>
            <li>
                <b>Why This Matters</b>
            </li>
            <ul>
                <li>Many small to mid-size brands rely heavily on e-commerce platforms.</li>
                <li>When they hire a 3PL, seamless integration is expected; manual uploads or CSV imports are not acceptable for fast-moving e-commerce.</li>
                <li>Your full integration enables:</li>
                <ul>
                <li>Real-time order flow</li>
                <li>Real-time inventory sync</li>
                <li>Real-time fulfillment updates</li>
                </ul>
                <li>All of which are critical for good customer experience and for clients choosing a 3PL partner.</li>
            </ul>
                </ul>

                <h2 style={{marginTop:"4rem"}} id="Shipping">Shipping Module (Detailed Understanding)</h2>
                <ul>
            <li>
                <b>How Orders Move Into Shipping</b>
            </li>
            <ul>
                <li>From within the Orders module, once an order is picked, staged, and ready:</li>
                <ul>
                <li>The user clicks <b>Ship</b>
                </li>
                <li>This sends the order to the <b>Shipping tab/module</b>
                </li>
                <li>It’s still the same system — just logically organized as a separate workflow area</li>
                </ul>
            </ul>
                
                <li>Carrier Integrations</li>
                <ul>
            <ul>
                <li>The system is integrated directly with multiple carriers, including:</li>
                <ul>
                <li>FedEx</li>
                <li>UPS</li>
                <li>GLS Canada</li>
                <li>Canpar</li>
                <li>Canada Post</li>
                <li>Others as needed</li>
                <li>These integrations allow:</li>
                <ul>
                    <li>Label generation</li>
                    <li>Tracking number retrieval</li>
                    <li>Rate quoting</li>
                    <li>Ability to ship on <i>your own</i> accounts or <i>the client’s</i> accounts </li>
                </ul>
                </ul>
            </ul>
            <li>
                <b>Why Client Accounts Matter</b>
            </li>
            <ul>
                <li>3PL clients often have better shipping rates in certain regions.</li>
                <li>Example:</li>
                <ul>
                <li>Your 3PL rates may be best around Ontario</li>
                <li>A client’s rates may be better in BC</li>
                </ul>
                <li>The system supports <b>third-party billing</b> and <b>client-owned accounts</b>, which is crucial for 3PL flexibility. </li>
            </ul>
            <li>
                <b>Automated Multi-Carrier Rate Shopping</b>
            </li>
            <ul>
                <li>When shipping an order:</li>
                <ul>
                <li>The system automatically rates the shipment across all available carriers</li>
                <li>This uses the package:</li>
                <ul>
                    <li>Weight</li>
                    <li>Dimensions</li>
                    <li>Destination address</li>
                </ul>
                <li>Weight/dimensions come from the SKU’s unit-of-measure setup (entered earlier in master inventory)</li>
                </ul>
                <li>The system identifies:</li>
                <ul>
                <li>The <b>cheapest</b>
                </li>
                <li>The <b>fastest</b> (if needed) </li>
                <li>Or whichever carrier matches your business rules.</li>
                <li>This saves a ton of time versus manually checking 6+ carrier portals.</li>
                </ul>
            </ul>
            <li>
                <b>Label Generation</b>
            </li>
            <ul>
                <li>After selecting a carrier (usually the cheapest):</li>
                <ul>
                <li>The system calls the carrier API</li>
                <li>Receives the shipping labels</li>
                <li>Stores the <b>tracking number</b> automatically on the order </li>
                <li>Produces a <b>PDF label file</b> ready for printing on thermal printers </li>
                <li>Labels can be generated for:</li>
                <ul>
                    <li>Single-package shipments</li>
                    <li>Multi-package shipments</li>
                    <li>Pallet/LTL cases depending on integration</li>
                </ul>
                </ul>
            </ul>
            <li>
                <b>Tracking Number Flow</b>
            </li>
            <ul>
                <li>The tracking number is:</li>
                <ul>
                <li>Saved to the order</li>
                <li>Pushed back to the client’s Shopify or WooCommerce store (if integrated)</li>
                <li>Used to generate the EDI 945 and 856 as needed</li>
                </ul>
            </ul>
            <li>
                <b>End Result</b>
            </li>
            <ul>
                <li>Your shipping module is essentially a full-fledged multi-carrier shipping system, similar to:</li>
                <li>ShipStation</li>
                <li>ShipEngine</li>
                <li>EasyPost</li>
                <li>But integrated directly with your WMS flow and your clients’ warehouses</li>
            </ul>
                </ul>
                </ul>
 
                <h2 style={{marginTop:"4rem"}} id="UserAccounts">User Accounts & Roles</h2>
                <ul>
                    <li>
                    <b>Unlimited Users (Practical, Not Arbitrary)</b>
                    </li>
                    <ul>
                    <li>Because you own your servers and infrastructure, you’re not constrained by per-user licensing fees.</li>
                    <li>Adding more users has negligible cost for you.</li>
                    <li>This gives you a competitive advantage because many SaaS WMS platforms charge per user (sometimes steeply).</li>
                    </ul>
                    <li>
                    <b>Clients Get Their Own Logins</b>
                    </li>
                    <ul>
                    <li>Each client can have their own account(s) with:</li>
                    <ul>
                        <li>Email + password login</li>
                        <li>Configurable permissions</li>
                    </ul>
                    <li>Clients can log in to:</li>
                    <ul>
                        <li>View <b>their own inventory</b> in real time </li>
                        <li>View <b>their own orders, shipments, inbound items</b>
                        </li>
                        <li>Access <b>reports</b> relevant to their virtual warehouse <p>
                            <br /> This is a huge value-add for 3PL transparency and client trust. <br />
                        </p>
                        </li>
                    </ul>
                    </ul>
                    <li>
                    <b>Role-Based Access</b>
                    </li>
                    <ul>
                    <li>You control what permissions clients have:</li>
                    <ul>
                        <li>
                        <b>View-only access</b> (most common)
                        </li>
                        <li>
                        <b>Order creation access</b> (many clients request this)
                        </li>
                        <li>Potential for more granular controls (inventory editing, product creation, etc.) <p>
                            <br /> Your approach leads to: <br />
                        </p>
                        </li>
                    </ul>
                    <li>Less manual work for your internal operations team <p> Reduced email-order chaos <br />
                        </p>
                    </li>
                    <li>Immediate client empowerment</li>
                    <li>Fewer communication mistakes</li>
                    </ul>
                    <li>
                    <b>Virtual Warehouse Isolation</b>
                    </li>
                    <ul>
                    <li>Each client is tied to <b>their own virtual warehouse</b>. </li>
                    <li>Permissions ensure:</li>
                    <ul>
                        <li>They only see <i>their</i> inventory </li>
                        <li>They only see <i>their</i> orders </li>
                        <li>No cross-client visibility is possible</li>
                        <li>This is the backbone of a 3PL-oriented WMS.</li>
                    </ul>
                    </ul>
                </ul>

                <h2 style={{marginTop:"4rem"}} id="API">API & Integration Options</h2>
                <ul>
            <li>
                <b>REST API (Orders + Inbound Shipments)</b>
            </li>
            <ul>
                <li>Both modules (orders and inbound shipments) have fully open REST endpoints.</li>
                <li>Clients can integrate using:</li>
                <ul>
                <li>
                    <b>API keys</b> (simpler, service-to-service)
                </li>
                <li>JWT if they prefer standard user-based access (less common for external integrations)</li>
                </ul>
                <li>Your BizTalk server posts directly to these URLs, but any system capable of HTTP POST can integrate.</li>
            </ul>
            <li>
                <b>SQL Stored Procedure Integration</b>
            </li>
            <ul>
                <li>Your BizTalk setup also supports calling SQL stored procedures directly using the WCF adapter.</li>
                <li>This gives clients with SQL expertise another integration option.</li>
                <li>For some organizations, stored-procedure integration is far easier than API-based integration.</li>
            </ul>
            <li>
                <b>FTP + XML Integration</b>
            </li>
            <ul>
                <li>You support:</li>
                <ul>
                <li>FTP uploads of XML order files</li>
                <li>FTP export of XML shipment confirmations</li>
                </ul>
                <li>This is important because many legacy ERPs and mid-tier systems still rely on SFTP/FTP workflows.</li>
            </ul>
                </ul>

                <h2 style={{marginTop:"4rem"}} id="EDI">EDI Services</h2>
                <ul>
            <li>
                <b>BizTalk Server as Your EDI Engine</b>
            </li>
            <ul>
                <li>You're using BizTalk Server 2016 — stable, supported, and perfect for X12 EDI.</li>
                <li>EDI standards (940, 945, 856, 850, etc.) haven’t changed in years, so the version is completely adequate.</li>
                <li>You have a <i>perpetual license</i>. </li>
                <ul>
                <li>This is extremely valuable because:</li>
                <ul>
                    <li>Microsoft no longer sells them</li>
                    <li>Newcomers have to use expensive cloud-based EDI subscriptions or SaaS EDI VANs</li>
                    <li>You avoid these subscription costs entirely</li>
                    <li>This gives you a major <b>cost advantage</b> in the 3PL/WMS SaaS market. </li>
                </ul>
                </ul>
            </ul>
            <li>
                <b>Acting as a VAN for Clients</b>
            </li>
            <ul>
                <li>You can function as your clients’ EDI gateway:</li>
                <ul>
                <li>Receive 940s</li>
                <li>Send 945s</li>
                <li>Send 856s</li>
                <li>Receive 850 purchase orders</li>
                <li>Any other X12 transactions supported by your BizTalk schemas</li>
                </ul>
                <li>Because you own both the EDI engine and the WMS:</li>
                <ul>
                <li>Mapping is faster</li>
                <li>Onboarding is simpler</li>
                <li>Compatibility is guaranteed</li>
                <li>Costs are dramatically lower than using third-party VANs</li>
                <li>In the WMS industry, most solutions <i>force</i> clients to contract with a separate EDI provider — which is expensive and inefficient. Your integrated EDI service is a huge selling point. </li>
                </ul>
            </ul>
            <li>
                <b>Why This Matters</b>
            </li>
            <ul>
                <li>Your system supports <b>multiple integration layers</b>: </li>
                <ul>
                <li>REST API</li>
                <li>SQL procedure integration</li>
                <li>FTP XML</li>
                <li>Full EDI suite via BizTalk</li>
                <li>Most WMS providers offer only one or two of these — and often at a high price point.</li>
                </ul>
                <li>Your setup is ideal for:</li>
                <ul>
                <li>Enterprise ERP systems</li>
                <li>Legacy systems</li>
                <li>E-commerce storefronts</li>
                <li>Tech-heavy clients</li>
                <li>Tech-light clients</li>
                <li>Anyone needing EDI</li>
                <li>This is a major differentiator.</li>
                </ul>
            </ul>
                </ul>

        </div>
        <Footer />
      </StyleProvider>
    </div>
  );
}