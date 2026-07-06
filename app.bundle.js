(() => {
  // ../../mnt/data/tracka_polish_v5/js/embedded-data.js
  var CURRICULUM_DATA = [{ "id": 1, "stage": "01 Foundations", "type": "Theory", "topic": "LAN vs WAN", "learn": "Scope, ownership, technologies and production examples", "practice": "Draw office LAN \u2192 ISP \u2192 Internet \u2192 remote site", "mastery": "Explain boundaries and failure domains", "prerequisites": [] }, { "id": 2, "stage": "01 Foundations", "type": "Theory", "topic": "Internet vs Intranet", "learn": "Public vs private services, routing and access boundaries", "practice": "Map internal and public services", "mastery": "Explain why internal does not automatically mean secure", "prerequisites": [1] }, { "id": 3, "stage": "01 Foundations", "type": "Theory", "topic": "Client\u2013Server and P2P", "learn": "Roles, sockets and request/response behavior", "practice": "Identify roles in browser, DNS and SMB flows", "mastery": "Explain dependencies", "prerequisites": [2] }, { "id": 4, "stage": "01 Foundations", "type": "Theory", "topic": "Traffic Delivery Models", "learn": "Unicast, broadcast, multicast and anycast", "practice": "Classify ARP, TCP, routing and CDN examples", "mastery": "Choose correct model for a scenario", "prerequisites": [3] }, { "id": 5, "stage": "01 Foundations", "type": "Theory", "topic": "Performance Fundamentals", "learn": "Bandwidth, throughput, goodput, latency, jitter and loss", "practice": "Compare application impact", "mastery": "Diagnose the important metric for a scenario", "prerequisites": [4] }, { "id": 6, "stage": "01 Foundations", "type": "Theory", "topic": "OSI and TCP/IP", "learn": "Layer functions and practical troubleshooting use", "practice": "Map DNS, TCP, IP and Ethernet", "mastery": "Trace a failure by layer", "prerequisites": [5] }, { "id": 7, "stage": "01 Foundations", "type": "Theory", "topic": "Encapsulation", "learn": "Headers/trailers and decapsulation", "practice": "Draw HTTP \u2192 TCP \u2192 IP \u2192 Ethernet", "mastery": "Explain what changes at router hops", "prerequisites": [6] }, { "id": 8, "stage": "02 IPv4 & Subnetting", "type": "Theory", "topic": "IPv4 Structure", "learn": "Network/host portions and address types", "practice": "Classify sample addresses", "mastery": "Explain local vs remote decision", "prerequisites": [7] }, { "id": 9, "stage": "02 IPv4 & Subnetting", "type": "Theory", "topic": "Binary and Bitwise AND", "learn": "Binary conversion and mask operation", "practice": "10 conversions + 5 AND exercises", "mastery": "Derive network ID", "prerequisites": [8] }, { "id": 10, "stage": "02 IPv4 & Subnetting", "type": "Theory", "topic": "Subnet Mask and CIDR", "learn": "Prefix length and address capacity", "practice": "Convert masks \u2194 CIDR", "mastery": "Explain /24 vs /27 operationally", "prerequisites": [9] }, { "id": 11, "stage": "02 IPv4 & Subnetting", "type": "Theory", "topic": "Network/Broadcast/Host Range", "learn": "Calculate subnet boundaries", "practice": "15 mixed CIDR problems", "mastery": "Solve arbitrary subnet accurately", "prerequisites": [10] }, { "id": 12, "stage": "02 IPv4 & Subnetting", "type": "Theory", "topic": "Special Address Ranges", "learn": "Private, public, loopback, link-local and multicast concepts", "practice": "Classify addresses", "mastery": "Explain APIPA symptoms", "prerequisites": [11] }, { "id": 13, "stage": "02 IPv4 & Subnetting", "type": "Theory", "topic": "FLSM and VLSM", "learn": "Efficient address allocation", "practice": "Design departmental addressing", "mastery": "Avoid overlap and waste", "prerequisites": [12] }, { "id": 14, "stage": "02 IPv4 & Subnetting", "type": "Theory", "topic": "Route Summarization", "learn": "Aggregation and trade-offs", "practice": "Summarize contiguous prefixes", "mastery": "Explain bad-summary black-hole risk", "prerequisites": [13] }, { "id": 15, "stage": "02 IPv4 & Subnetting", "type": "Gate", "topic": "SUBNETTING GATE", "learn": "Prove subnetting mastery before routing", "practice": "Timed set with 90%+ accuracy", "mastery": "Solve without guessing", "prerequisites": [14] }, { "id": 16, "stage": "03 Ethernet, MAC & ARP", "type": "Theory", "topic": "Ethernet Frame", "learn": "MAC fields, EtherType, payload, FCS and MTU relation", "practice": "Inspect one frame in Wireshark", "mastery": "Explain important fields", "prerequisites": [15] }, { "id": 17, "stage": "03 Ethernet, MAC & ARP", "type": "Theory", "topic": "MAC Learning", "learn": "Learning, forwarding, filtering, flooding and aging", "practice": "Observe MAC table before/after traffic", "mastery": "Predict forwarding behavior", "prerequisites": [16] }, { "id": 18, "stage": "03 Ethernet, MAC & ARP", "type": "Theory", "topic": "Unknown Unicast & Broadcast", "learn": "Flooding behavior and scope", "practice": "Predict egress ports", "mastery": "Explain flooding vs broadcasting", "prerequisites": [17] }, { "id": 19, "stage": "03 Ethernet, MAC & ARP", "type": "Theory", "topic": "ARP Request/Reply", "learn": "IPv4-to-MAC resolution", "practice": "Capture ARP exchange", "mastery": "Explain broadcast request/unicast reply", "prerequisites": [18] }, { "id": 20, "stage": "03 Ethernet, MAC & ARP", "type": "Theory", "topic": "Local vs Remote Delivery", "learn": "ARP for destination vs gateway", "practice": "Capture local and remote traffic", "mastery": "Explain remote IP with gateway MAC", "prerequisites": [19] }, { "id": 21, "stage": "03 Ethernet, MAC & ARP", "type": "Theory", "topic": "ARP Cache & Duplicate IP", "learn": "Cache lifecycle, GARP and common failures", "practice": "Clear cache and observe rebuild", "mastery": "Diagnose stale ARP/duplicate IP", "prerequisites": [20] }, { "id": 22, "stage": "03 Ethernet, MAC & ARP", "type": "Gate", "topic": "L2 DELIVERY GATE", "learn": "Prove frame and ARP reasoning", "practice": "Whiteboard local and remote flows", "mastery": "Explain every MAC/IP decision", "prerequisites": [21] }, { "id": 23, "stage": "04 Switching & VLANs", "type": "Theory", "topic": "Switch Forwarding", "learn": "Ingress lookup, source learning and egress decision", "practice": "Predict from MAC table", "mastery": "Troubleshoot unknown destination", "prerequisites": [22] }, { "id": 24, "stage": "04 Switching & VLANs", "type": "Theory", "topic": "Interfaces & Counters", "learn": "State, speed, duplex, CRC and drops", "practice": "Inspect interface counters", "mastery": "Relate errors to likely causes", "prerequisites": [23] }, { "id": 25, "stage": "04 Switching & VLANs", "type": "Theory", "topic": "VLAN Segmentation", "learn": "Logical broadcast domains", "practice": "Design user/server/management VLANs", "mastery": "Explain VLAN vs security policy", "prerequisites": [24] }, { "id": 26, "stage": "04 Switching & VLANs", "type": "Theory", "topic": "Access Ports", "learn": "Untagged endpoint connectivity", "practice": "Configure two access VLANs", "mastery": "Verify membership/connectivity", "prerequisites": [25] }, { "id": 27, "stage": "04 Switching & VLANs", "type": "Theory", "topic": "802.1Q Trunks", "learn": "Tagging, native VLAN and allowed list", "practice": "Configure and verify trunk", "mastery": "Diagnose missing VLAN/native mismatch", "prerequisites": [26] }, { "id": 28, "stage": "04 Switching & VLANs", "type": "Theory", "topic": "Router-on-a-Stick", "learn": "Subinterfaces and inter-VLAN routing", "practice": "Build small ROAS topology", "mastery": "Trace VLAN 10 \u2192 VLAN 20", "prerequisites": [27] }, { "id": 29, "stage": "04 Switching & VLANs", "type": "Theory", "topic": "SVIs & L3 Switching", "learn": "Gateway SVIs and routed switching", "practice": "Compare SVI with ROAS", "mastery": "Choose design for scenario", "prerequisites": [28] }, { "id": 30, "stage": "04 Switching & VLANs", "type": "Gate", "topic": "VLAN GATE", "learn": "Prove VLAN/trunk/gateway understanding", "practice": "Build 2 VLANs and routing", "mastery": "Find wrong VLAN/trunk/gateway fault", "prerequisites": [29] }, { "id": 31, "stage": "05 STP & L2 Redundancy", "type": "Theory", "topic": "Layer 2 Loops", "learn": "Storms, duplicates and MAC instability", "practice": "Draw triangle and predict behavior", "mastery": "Explain why TTL does not stop L2 loop", "prerequisites": [30] }, { "id": 32, "stage": "05 STP & L2 Redundancy", "type": "Theory", "topic": "Root Bridge Election", "learn": "Bridge ID and election", "practice": "Calculate sample elections", "mastery": "Predict root", "prerequisites": [31] }, { "id": 33, "stage": "05 STP & L2 Redundancy", "type": "Theory", "topic": "Port Roles", "learn": "Root, designated and alternate ports", "practice": "Calculate roles on topology", "mastery": "Explain forwarding/blocking", "prerequisites": [32] }, { "id": 34, "stage": "05 STP & L2 Redundancy", "type": "Theory", "topic": "RSTP Convergence", "learn": "Roles, states and topology changes", "practice": "Observe link-failure convergence", "mastery": "Explain reconvergence", "prerequisites": [33] }, { "id": 35, "stage": "05 STP & L2 Redundancy", "type": "Theory", "topic": "PortFast & BPDU Guard", "learn": "Edge optimization and protection", "practice": "Configure where supported", "mastery": "Explain correct placement", "prerequisites": [34] }, { "id": 36, "stage": "05 STP & L2 Redundancy", "type": "Theory", "topic": "Root Guard & Loop Guard", "learn": "Protection objectives", "practice": "Map feature to scenario", "mastery": "Choose correct protection", "prerequisites": [35] }, { "id": 37, "stage": "05 STP & L2 Redundancy", "type": "Theory", "topic": "EtherChannel", "learn": "Bundling and STP interaction", "practice": "Build/diagram bundled uplink", "mastery": "Explain parallel-link behavior", "prerequisites": [36] }, { "id": 38, "stage": "06 Routing Fundamentals", "type": "Theory", "topic": "Routing Table", "learn": "Prefix, next hop, interface, source and metric", "practice": "Read Windows/Linux/Cisco tables", "mastery": "Explain selected route", "prerequisites": [37] }, { "id": 39, "stage": "06 Routing Fundamentals", "type": "Theory", "topic": "Route Types", "learn": "Connected, local, static and default", "practice": "Build small route table", "mastery": "Choose correct route type", "prerequisites": [38] }, { "id": 40, "stage": "06 Routing Fundamentals", "type": "Theory", "topic": "Longest Prefix Match", "learn": "Forwarding selection", "practice": "Solve competing-route cases", "mastery": "Predict selected route", "prerequisites": [39] }, { "id": 41, "stage": "06 Routing Fundamentals", "type": "Theory", "topic": "Recursive Lookup", "learn": "Next-hop reachability", "practice": "Trace recursive resolution", "mastery": "Diagnose unusable route", "prerequisites": [40] }, { "id": 42, "stage": "06 Routing Fundamentals", "type": "Theory", "topic": "AD vs Metric", "learn": "Source trust vs path preference", "practice": "Compare candidate routes", "mastery": "Explain distinction correctly", "prerequisites": [41] }, { "id": 43, "stage": "06 Routing Fundamentals", "type": "Theory", "topic": "Static Route Variants", "learn": "Floating, host and summary routes", "practice": "Configure examples", "mastery": "Choose route for scenario", "prerequisites": [42] }, { "id": 44, "stage": "06 Routing Fundamentals", "type": "Theory", "topic": "Forward & Return Path", "learn": "Bidirectional reachability and asymmetry", "practice": "Draw both directions", "mastery": "Diagnose missing return route", "prerequisites": [43] }, { "id": 45, "stage": "06 Routing Fundamentals", "type": "Gate", "topic": "ROUTING GATE", "learn": "Prove route-selection reasoning", "practice": "10 selection/return-path cases", "mastery": "Explain path with evidence", "prerequisites": [44] }, { "id": 46, "stage": "07 Dynamic Routing & OSPF", "type": "Theory", "topic": "Dynamic Routing Models", "learn": "Convergence, IGP/EGP, DV/LS/PV", "practice": "Compare RIP/EIGRP/OSPF/BGP roles", "mastery": "Choose protocol category", "prerequisites": [45] }, { "id": 47, "stage": "07 Dynamic Routing & OSPF", "type": "Theory", "topic": "OSPF Operation", "learn": "LSDB and SPF concepts", "practice": "Draw hello-to-route flow", "mastery": "Explain OSPF metric basis", "prerequisites": [46] }, { "id": 48, "stage": "07 Dynamic Routing & OSPF", "type": "Theory", "topic": "Router ID & Neighbors", "learn": "Identity and hello process", "practice": "Inspect neighbors", "mastery": "Diagnose RID issue conceptually", "prerequisites": [47] }, { "id": 49, "stage": "07 Dynamic Routing & OSPF", "type": "Theory", "topic": "Adjacency Requirements", "learn": "Matching parameters and states", "practice": "Observe state transitions", "mastery": "Infer mismatch from state", "prerequisites": [48] }, { "id": 50, "stage": "07 Dynamic Routing & OSPF", "type": "Theory", "topic": "Cost & Reference Bandwidth", "learn": "Metric calculation", "practice": "Calculate sample costs", "mastery": "Explain reference bandwidth issue", "prerequisites": [49] }, { "id": 51, "stage": "07 Dynamic Routing & OSPF", "type": "Theory", "topic": "Areas and Roles", "learn": "Area 0, ABR and ASBR", "practice": "Draw multi-area design", "mastery": "Identify roles", "prerequisites": [50] }, { "id": 52, "stage": "07 Dynamic Routing & OSPF", "type": "Theory", "topic": "DR/BDR", "learn": "Multi-access optimization", "practice": "Predict election", "mastery": "Explain where it matters", "prerequisites": [51] }, { "id": 53, "stage": "07 Dynamic Routing & OSPF", "type": "Theory", "topic": "Passive & Default Advertisement", "learn": "Control-plane exposure and route injection", "practice": "Configure/verify", "mastery": "Explain passive behavior", "prerequisites": [52] }, { "id": 54, "stage": "07 Dynamic Routing & OSPF", "type": "Theory", "topic": "OSPF Troubleshooting", "learn": "Area, timers, auth, MTU, passive, RID, advertisement", "practice": "Build symptom/evidence/cause matrix", "mastery": "Troubleshoot FULL neighbor but no route", "prerequisites": [53] }, { "id": 55, "stage": "07 Dynamic Routing & OSPF", "type": "Gate", "topic": "OSPF GATE", "learn": "Build and break small OSPF domain", "practice": "Inject 3 faults and recover", "mastery": "Explain evidence for each cause", "prerequisites": [54] }, { "id": 56, "stage": "08 TCP, UDP & ICMP", "type": "Theory", "topic": "TCP Header & Flags", "learn": "Ports, seq/ack, flags, window and options", "practice": "Inspect SYN packet", "mastery": "Explain fields", "prerequisites": [55] }, { "id": 57, "stage": "08 TCP, UDP & ICMP", "type": "Theory", "topic": "Three-Way Handshake", "learn": "SYN, SYN-ACK, ACK and ISNs", "practice": "Capture handshake", "mastery": "Explain seq/ack progression", "prerequisites": [56] }, { "id": 58, "stage": "08 TCP, UDP & ICMP", "type": "Theory", "topic": "Reliability", "learn": "ACKs, retransmission, duplicate ACK and ordering", "practice": "Inspect retransmission", "mastery": "Differentiate loss symptoms", "prerequisites": [57] }, { "id": 59, "stage": "08 TCP, UDP & ICMP", "type": "Theory", "topic": "Flow Control", "learn": "Receive window, scaling and zero window", "practice": "Inspect window values", "mastery": "Explain receiver-limited flow", "prerequisites": [58] }, { "id": 60, "stage": "08 TCP, UDP & ICMP", "type": "Theory", "topic": "Connection Closing", "learn": "FIN, TIME_WAIT, CLOSE_WAIT and RST", "practice": "Capture graceful/abrupt close", "mastery": "Identify who closed", "prerequisites": [59] }, { "id": 61, "stage": "08 TCP, UDP & ICMP", "type": "Theory", "topic": "UDP", "learn": "Header, connectionless behavior and app reliability", "practice": "Capture DNS UDP", "mastery": "Explain TCP/UDP trade-offs", "prerequisites": [60] }, { "id": 62, "stage": "08 TCP, UDP & ICMP", "type": "Theory", "topic": "ICMP", "learn": "Echo, unreachable, time exceeded and packet-too-big", "practice": "Capture ping/traceroute", "mastery": "Explain diagnostic limits", "prerequisites": [61] }, { "id": 63, "stage": "08 TCP, UDP & ICMP", "type": "Theory", "topic": "TTL & Traceroute", "learn": "Hop limit and path inference", "practice": "Run and interpret traceroute", "mastery": "Avoid overclaiming failure point", "prerequisites": [62] }, { "id": 64, "stage": "08 TCP, UDP & ICMP", "type": "Theory", "topic": "MTU, MSS & PMTUD", "learn": "Fragmentation and black-hole symptoms", "practice": "Test packet size behavior", "mastery": "Recognize VPN MTU issue", "prerequisites": [63] }, { "id": 65, "stage": "08 TCP, UDP & ICMP", "type": "Gate", "topic": "TRANSPORT GATE", "learn": "Analyze handshake, data and close/failure", "practice": "Build packet timeline", "mastery": "Explain evidence and uncertainty", "prerequisites": [64] }, { "id": 66, "stage": "09 Core Services", "type": "Theory", "topic": "DNS Resolution Path", "learn": "Stub, recursive, root, TLD and authoritative roles", "practice": "Trace with dig/nslookup", "mastery": "Explain resolution path", "prerequisites": [65] }, { "id": 67, "stage": "09 Core Services", "type": "Theory", "topic": "DNS Records", "learn": "A, AAAA, CNAME, MX, TXT, NS, SOA, PTR, SRV, CAA", "practice": "Inspect record chain", "mastery": "Choose correct record", "prerequisites": [66] }, { "id": 68, "stage": "09 Core Services", "type": "Theory", "topic": "DNS Transport & Cache", "learn": "UDP/TCP 53, TTL, negative cache and EDNS concept", "practice": "Compare cached/uncached query", "mastery": "Explain TCP use cases", "prerequisites": [67] }, { "id": 69, "stage": "09 Core Services", "type": "Theory", "topic": "Enterprise DNS", "learn": "Internal, public and split DNS", "practice": "Draw answer paths", "mastery": "Diagnose different answers", "prerequisites": [68] }, { "id": 70, "stage": "09 Core Services", "type": "Theory", "topic": "DNS Forwarding", "learn": "Forwarders and conditional forwarding", "practice": "Diagram chain", "mastery": "Find failure points", "prerequisites": [69] }, { "id": 71, "stage": "09 Core Services", "type": "Theory", "topic": "DHCP DORA", "learn": "Discover, Offer, Request, ACK and lease lifecycle", "practice": "Capture/inspect exchange", "mastery": "Explain startup flow", "prerequisites": [70] }, { "id": 72, "stage": "09 Core Services", "type": "Theory", "topic": "DHCP Enterprise Design", "learn": "Scopes, reservations, options and relay", "practice": "Design two-subnet service", "mastery": "Explain relay need", "prerequisites": [71] }, { "id": 73, "stage": "09 Core Services", "type": "Theory", "topic": "NTP", "learn": "Drift, stratum and service/security impact", "practice": "Compare clocks/sources", "mastery": "Explain Kerberos/cert/log impact", "prerequisites": [72] }, { "id": 74, "stage": "09 Core Services", "type": "Gate", "topic": "SERVICES GATE", "learn": "Troubleshoot name, address and time failures", "practice": "Solve 3 fault scenarios", "mastery": "Prove cause with evidence", "prerequisites": [73] }, { "id": 75, "stage": "10 NAT", "type": "Theory", "topic": "NAT Purpose", "learn": "Translation terminology and limits", "practice": "Draw original/translated tuples", "mastery": "Explain NAT vs firewall", "prerequisites": [74] }, { "id": 76, "stage": "10 NAT", "type": "Theory", "topic": "Static/Dynamic NAT & PAT", "learn": "Mapping models", "practice": "Compare translation tables", "mastery": "Choose correct model", "prerequisites": [75] }, { "id": 77, "stage": "10 NAT", "type": "Theory", "topic": "SNAT, DNAT & Port Forwarding", "learn": "Source/destination changes", "practice": "Trace inbound/outbound flows", "mastery": "Explain both directions", "prerequisites": [76] }, { "id": 78, "stage": "10 NAT", "type": "Theory", "topic": "Return Translation", "learn": "Reverse mapping and state", "practice": "Draw return path", "mastery": "Diagnose missing return traffic", "prerequisites": [77] }, { "id": 79, "stage": "10 NAT", "type": "Theory", "topic": "Hairpin & Overlap", "learn": "NAT edge cases", "practice": "Diagram cases", "mastery": "Explain failed assumptions", "prerequisites": [78] }, { "id": 80, "stage": "10 NAT", "type": "Gate", "topic": "NAT GATE", "learn": "Policy correct but app fails", "practice": "Test NAT, route, listener and host firewall", "mastery": "Identify exact dependency", "prerequisites": [79] }, { "id": 81, "stage": "11 HTTP, HTTPS & TLS", "type": "Theory", "topic": "HTTP", "learn": "Methods, headers, Host, status codes and persistence", "practice": "Inspect with curl", "mastery": "Interpret response correctly", "prerequisites": [80] }, { "id": 82, "stage": "11 HTTP, HTTPS & TLS", "type": "Theory", "topic": "Proxy & Load Balancer", "learn": "Frontend/backend flow and boundaries", "practice": "Draw client \u2192 proxy/LB \u2192 app", "mastery": "Differentiate 502/503/504", "prerequisites": [81] }, { "id": 83, "stage": "11 HTTP, HTTPS & TLS", "type": "Theory", "topic": "TLS Purpose & Validation", "learn": "Confidentiality, integrity, chain and hostname", "practice": "Inspect certificate", "mastery": "Explain browser validation", "prerequisites": [82] }, { "id": 84, "stage": "11 HTTP, HTTPS & TLS", "type": "Theory", "topic": "TLS Handshake", "learn": "Negotiation, certificate, key agreement and session keys", "practice": "Inspect handshake metadata", "mastery": "Explain key establishment", "prerequisites": [83] }, { "id": 85, "stage": "11 HTTP, HTTPS & TLS", "type": "Theory", "topic": "TLS Deployment Models", "learn": "Termination, passthrough and inspection", "practice": "Draw 3 models", "mastery": "Discuss trade-offs", "prerequisites": [84] }, { "id": 86, "stage": "11 HTTP, HTTPS & TLS", "type": "Gate", "topic": "HTTPS GATE", "learn": "TCP 443 works but site fails", "practice": "Separate DNS/TCP/TLS/proxy/app", "mastery": "Locate failing layer", "prerequisites": [85] }, { "id": 87, "stage": "12 Firewalls & Security", "type": "Theory", "topic": "Stateless vs Stateful", "learn": "Packet rules vs session tracking", "practice": "Draw state behavior", "mastery": "Explain return traffic", "prerequisites": [86] }, { "id": 88, "stage": "12 Firewalls & Security", "type": "Theory", "topic": "Zones & Policy Matching", "learn": "Source, destination, service, action and order", "practice": "Design LAN/DMZ/Server/Management policy", "mastery": "Explain implicit deny", "prerequisites": [87] }, { "id": 89, "stage": "12 Firewalls & Security", "type": "Theory", "topic": "Logging & Policy Hits", "learn": "Evidence and limitations", "practice": "Interpret log fields", "mastery": "Prove firewall processed flow", "prerequisites": [88] }, { "id": 90, "stage": "12 Firewalls & Security", "type": "Theory", "topic": "Firewall + NAT", "learn": "Policy/translation dependencies", "practice": "Trace both", "mastery": "Diagnose policy-vs-NAT issue", "prerequisites": [89] }, { "id": 91, "stage": "12 Firewalls & Security", "type": "Theory", "topic": "Asymmetric Routing", "learn": "Stateful path dependency", "practice": "Draw asymmetric path", "mastery": "Explain dropped return traffic", "prerequisites": [90] }, { "id": 92, "stage": "12 Firewalls & Security", "type": "Theory", "topic": "IDS vs IPS", "learn": "Passive vs inline detection/prevention", "practice": "Place sensors", "mastery": "Discuss tuning and false positives", "prerequisites": [91] }, { "id": 93, "stage": "12 Firewalls & Security", "type": "Theory", "topic": "DDoS Detection", "learn": "Baselines, rates, SYN patterns and upstream mitigation", "practice": "Create detection checklist", "mastery": "Explain mitigation boundary", "prerequisites": [92] }, { "id": 94, "stage": "12 Firewalls & Security", "type": "Gate", "topic": "FIREWALL GATE", "learn": "Design and troubleshoot segmentation", "practice": "Allow required, deny unnecessary, verify logs", "mastery": "Explain rule/state/NAT effects", "prerequisites": [93] }, { "id": 95, "stage": "13 VPN & IPsec", "type": "Theory", "topic": "VPN Types", "learn": "Site-to-site vs remote access", "practice": "Draw both", "mastery": "Choose correct model", "prerequisites": [94] }, { "id": 96, "stage": "13 VPN & IPsec", "type": "Theory", "topic": "IKE / Phase 1 Concepts", "learn": "Peer authentication and secure control channel", "practice": "Diagram negotiation", "mastery": "Explain mismatch categories", "prerequisites": [95] }, { "id": 97, "stage": "13 VPN & IPsec", "type": "Theory", "topic": "IPsec / Phase 2 Concepts", "learn": "SAs, selectors and protected traffic", "practice": "Draw selectors", "mastery": "Explain P1 up/P2 failure", "prerequisites": [96] }, { "id": 98, "stage": "13 VPN & IPsec", "type": "Theory", "topic": "Routing, NAT & Policy", "learn": "Tunnel path dependencies", "practice": "Trace protected flow", "mastery": "Diagnose tunnel-up/no-traffic", "prerequisites": [97] }, { "id": 99, "stage": "13 VPN & IPsec", "type": "Theory", "topic": "VPN MTU/MSS", "learn": "Encapsulation overhead", "practice": "Analyze overhead impact", "mastery": "Recognize partial failures", "prerequisites": [98] }, { "id": 100, "stage": "13 VPN & IPsec", "type": "Gate", "topic": "VPN GATE", "learn": "Tunnel up but app unreachable", "practice": "Check selectors, route, NAT, policy, return and MTU", "mastery": "Present evidence-driven diagnosis", "prerequisites": [99] }, { "id": 101, "stage": "14 Packet Analysis", "type": "Theory", "topic": "Capture Placement", "learn": "Choose interface and observation point", "practice": "Draw client/firewall/server capture points", "mastery": "Explain visibility limits", "prerequisites": [100] }, { "id": 102, "stage": "14 Packet Analysis", "type": "Theory", "topic": "Capture vs Display Filters", "learn": "Collection vs analysis filters", "practice": "Write host/port/protocol filters", "mastery": "Avoid filtering evidence away", "prerequisites": [101] }, { "id": 103, "stage": "14 Packet Analysis", "type": "Theory", "topic": "Protocol Flow Analysis", "learn": "ARP, ICMP, DNS, TCP and TLS metadata", "practice": "Build packet timeline", "mastery": "Identify abnormal sequence", "prerequisites": [102] }, { "id": 104, "stage": "14 Packet Analysis", "type": "Theory", "topic": "PCAP + Log Correlation", "learn": "Combine timing across sources", "practice": "Create unified timeline", "mastery": "State what each source proves", "prerequisites": [103] }, { "id": 105, "stage": "14 Packet Analysis", "type": "Gate", "topic": "PCAP GATE", "learn": "Investigate mixed capture", "practice": "Write findings", "mastery": "Separate fact, inference and uncertainty", "prerequisites": [104] }, { "id": 106, "stage": "15 Production Troubleshooting", "type": "Theory", "topic": "Symptom & Scope", "learn": "Exact impact and boundaries", "practice": "Rewrite vague incidents precisely", "mastery": "Ask high-value triage questions", "prerequisites": [105] }, { "id": 107, "stage": "15 Production Troubleshooting", "type": "Theory", "topic": "Last Known Good & Changes", "learn": "Timeline and change correlation", "practice": "Create incident timeline", "mastery": "Avoid assuming latest change is root cause", "prerequisites": [106] }, { "id": 108, "stage": "15 Production Troubleshooting", "type": "Theory", "topic": "Dependency Mapping", "learn": "DNS, route, firewall, TLS, service and backend", "practice": "Draw app dependency chain", "mastery": "Select efficient test order", "prerequisites": [107] }, { "id": 109, "stage": "15 Production Troubleshooting", "type": "Theory", "topic": "Layered Evidence Checks", "learn": "L1\u2192L2\u2192L3\u2192DNS\u2192transport\u2192firewall/NAT\u2192TLS\u2192app", "practice": "Build evidence checklist", "mastery": "Avoid random command guessing", "prerequisites": [108] }, { "id": 110, "stage": "15 Production Troubleshooting", "type": "Theory", "topic": "Hypothesis Testing", "learn": "Prediction, evidence and controlled test", "practice": "Write 3 hypotheses for same symptom", "mastery": "Eliminate causes logically", "prerequisites": [109] }, { "id": 111, "stage": "15 Production Troubleshooting", "type": "Theory", "topic": "Low-Risk Fix & Validation", "learn": "Rollback, validation and monitoring", "practice": "Write mini change plan", "mastery": "Prove restoration", "prerequisites": [110] }, { "id": 112, "stage": "15 Production Troubleshooting", "type": "Theory", "topic": "RCA", "learn": "Timeline, trigger, root cause and corrective actions", "practice": "Write simulated RCA", "mastery": "Separate symptom, cause and fix", "prerequisites": [111] }, { "id": 113, "stage": "15 Production Troubleshooting", "type": "Gate", "topic": "TROUBLESHOOTING GATE", "learn": "Solve timed multi-layer incident", "practice": "Document evidence \u2192 hypothesis \u2192 fix \u2192 validation", "mastery": "Defend reasoning", "prerequisites": [112] }];
  var INTERVIEW_DATA = [{ "id": 1, "category": "Networking fundamentals", "question": "Explain how a packet travels between hosts on the same subnet." }, { "id": 2, "category": "Networking fundamentals", "question": "Explain how traffic reaches a remote subnet." }, { "id": 3, "category": "Networking fundamentals", "question": "Explain OSI encapsulation and what changes at each router hop." }, { "id": 4, "category": "Networking fundamentals", "question": "What is a subnet and why does segmentation matter?" }, { "id": 5, "category": "TCP/IP", "question": "Explain the TCP three-way handshake with sequence numbers." }, { "id": 6, "category": "TCP/IP", "question": "TCP vs UDP: choose one for DNS, voice, and file transfer." }, { "id": 7, "category": "TCP/IP", "question": "Explain retransmissions, duplicate ACKs, receive window and TIME_WAIT." }, { "id": 8, "category": "TCP/IP", "question": "How do MTU, MSS and PMTUD failures appear?" }, { "id": 9, "category": "DNS", "question": "Walk through recursive DNS resolution end to end." }, { "id": 10, "category": "DNS", "question": "Why can internal and public DNS return different answers?" }, { "id": 11, "category": "DNS", "question": "When does DNS use TCP?" }, { "id": 12, "category": "DNS", "question": "Troubleshoot: IP works but hostname does not." }, { "id": 13, "category": "Routing", "question": "Explain longest prefix match, AD and metric." }, { "id": 14, "category": "Routing", "question": "Why can forward traffic work while return traffic fails?" }, { "id": 15, "category": "Routing", "question": "Explain recursive next-hop lookup." }, { "id": 16, "category": "Routing", "question": "Design a floating static route." }, { "id": 17, "category": "OSPF", "question": "Neighbor is FULL but route is missing. Troubleshoot." }, { "id": 18, "category": "OSPF", "question": "What parameters must match for OSPF adjacency?" }, { "id": 19, "category": "OSPF", "question": "Explain DR/BDR and where it matters." }, { "id": 20, "category": "OSPF", "question": "Explain OSPF areas, ABR and ASBR." }, { "id": 21, "category": "Switching", "question": "Explain MAC learning, flooding and aging." }, { "id": 22, "category": "Switching", "question": "Diagnose a native VLAN mismatch." }, { "id": 23, "category": "Switching", "question": "Explain STP root election and port roles." }, { "id": 24, "category": "Switching", "question": "Where should PortFast and BPDU Guard be used?" }, { "id": 25, "category": "Firewalls", "question": "Stateful vs stateless filtering." }, { "id": 26, "category": "Firewalls", "question": "Policy allows traffic but app fails: what do you check?" }, { "id": 27, "category": "Firewalls", "question": "Explain asymmetric routing impact on a stateful firewall." }, { "id": 28, "category": "Firewalls", "question": "IDS vs IPS and deployment trade-offs." }, { "id": 29, "category": "VPN", "question": "IPsec tunnel is up but traffic fails. Troubleshoot." }, { "id": 30, "category": "VPN", "question": "Explain Phase 1 vs Phase 2 concepts." }, { "id": 31, "category": "VPN", "question": "How do selectors, routes, NAT and policy interact?" }, { "id": 32, "category": "VPN", "question": "Explain VPN MTU/MSS problems." }, { "id": 33, "category": "TLS/PKI", "question": "Explain certificate chain and hostname validation." }, { "id": 34, "category": "TLS/PKI", "question": "Walk through a modern TLS handshake." }, { "id": 35, "category": "TLS/PKI", "question": "TLS termination vs passthrough vs inspection." }, { "id": 36, "category": "TLS/PKI", "question": "What is Perfect Forward Secrecy?" }, { "id": 37, "category": "Troubleshooting", "question": "Website is slow for some users only. Build a test plan." }, { "id": 38, "category": "Troubleshooting", "question": "How do you distinguish DNS, TCP, TLS, proxy and app failures?" }, { "id": 39, "category": "Troubleshooting", "question": "Describe evidence-driven troubleshooting." }, { "id": 40, "category": "Troubleshooting", "question": "How do you write an RCA?" }, { "id": 41, "category": "Incident response", "question": "What do you do after discovering an infected host?" }, { "id": 42, "category": "Incident response", "question": "How do you preserve evidence while containing impact?" }, { "id": 43, "category": "Incident response", "question": "Build an incident timeline from logs and PCAP." }, { "id": 44, "category": "Communication", "question": "Explain an outage to a non-technical customer." }, { "id": 45, "category": "Communication", "question": "Give a concise escalation update with evidence and next action." }, { "id": 46, "category": "Communication", "question": "How do you communicate uncertainty without guessing?" }, { "id": 47, "category": "Whiteboard scenarios", "question": "Draw a branch-to-datacenter path and identify failure boundaries." }, { "id": 48, "category": "Whiteboard scenarios", "question": "Design user/server/DMZ/management segmentation." }, { "id": 49, "category": "Whiteboard scenarios", "question": "Whiteboard DNS \u2192 TCP \u2192 TLS \u2192 reverse proxy \u2192 application." }];
  var SCENARIO_DATA = [{ "id": 1, "name": "DNS resolution failure", "context": "Enterprise production environment", "complaint": "Users can reach 10.20.30.40 but app.internal.example fails.", "symptoms": "Client has correct IP and gateway; DNS timeout appears.", "evidence": ["ipconfig /all shows DNS 10.10.10.53", "nslookup times out", "ping 10.10.10.53 succeeds"], "rootCause": "Conditional forwarder points to retired DNS server." }, { "id": 2, "name": "Wrong VLAN", "context": "Enterprise production environment", "complaint": "A newly moved workstation cannot reach its gateway.", "symptoms": "Link is up; DHCP fails; neighbors on adjacent desks work.", "evidence": ["Switchport operational mode: access", "Access VLAN: 30", "Expected user VLAN: 20"], "rootCause": "Access port assigned to VLAN 30 instead of VLAN 20." }, { "id": 3, "name": "Trunk allowed-list problem", "context": "Enterprise production environment", "complaint": "One VLAN works across the uplink; another does not.", "symptoms": "Local same-VLAN traffic works on both switches.", "evidence": ["show interfaces trunk: VLAN 40 absent from allowed list", "STP forwarding for VLAN 40 locally"], "rootCause": "VLAN 40 missing from trunk allowed list." }, { "id": 4, "name": "STP path issue", "context": "Enterprise production environment", "complaint": "Traffic takes an unexpected path after a topology change.", "symptoms": "No complete outage, but latency and uplink utilization changed.", "evidence": ["Root bridge changed after maintenance", "Lower-priority access switch became root"], "rootCause": "Incorrect STP root priority caused suboptimal tree." }, { "id": 5, "name": "Missing return route", "context": "Enterprise production environment", "complaint": "Client SYN reaches server but no SYN-ACK returns to client.", "symptoms": "Server is listening and local clients connect.", "evidence": ["Server capture shows SYN", "Gateway route table lacks client subnet"], "rootCause": "Return route to client subnet is missing." }, { "id": 6, "name": "OSPF neighbor mismatch", "context": "Enterprise production environment", "complaint": "Two routers remain in INIT/EXSTART and do not reach FULL.", "symptoms": "Physical link and IP connectivity are good.", "evidence": ["Hello/dead timers differ", "Area IDs match"], "rootCause": "OSPF hello/dead timer mismatch." }, { "id": 7, "name": "OSPF FULL but route missing", "context": "Enterprise production environment", "complaint": "Adjacency is FULL but a remote LAN is absent.", "symptoms": "Transit networks are reachable.", "evidence": ["show ip ospf neighbor FULL", "Remote LAN interface is passive but network statement missing"], "rootCause": "Remote LAN is not advertised into OSPF." }, { "id": 8, "name": "Firewall policy issue", "context": "Enterprise production environment", "complaint": "TCP handshake never completes across a security zone.", "symptoms": "Routing and NAT appear correct.", "evidence": ["Firewall log shows deny on rule 17", "Rule 17 precedes intended allow rule"], "rootCause": "Earlier deny rule shadows intended allow policy." }, { "id": 9, "name": "NAT translation issue", "context": "Enterprise production environment", "complaint": "Published service is unreachable from Internet.", "symptoms": "Firewall allow rule hits; backend works internally.", "evidence": ["DNAT maps public IP to wrong private IP", "No SYN on real backend"], "rootCause": "DNAT target address is incorrect." }, { "id": 10, "name": "TLS certificate problem", "context": "Enterprise production environment", "complaint": "Browser warns on an otherwise reachable HTTPS site.", "symptoms": "TCP 443 and TLS negotiation start successfully.", "evidence": ["Certificate SAN lacks requested hostname", "Certificate is otherwise within validity dates"], "rootCause": "Hostname mismatch in certificate SAN." }, { "id": 11, "name": "Reverse proxy 502/503/504", "context": "Enterprise production environment", "complaint": "Users receive 502 from the frontend.", "symptoms": "Frontend TLS is healthy.", "evidence": ["Proxy log: connection refused to 10.0.5.20:8080", "Backend process listens on 127.0.0.1:8080"], "rootCause": "Backend only bound to loopback." }, { "id": 12, "name": "VPN tunnel up but traffic fails", "context": "Enterprise production environment", "complaint": "IKE/IPsec SAs are established but application traffic fails.", "symptoms": "Tunnel counters do not increase for target subnet.", "evidence": ["Local selector 10.1.0.0/16", "Peer expects 10.1.20.0/24"], "rootCause": "Traffic selector mismatch." }, { "id": 13, "name": "MTU/MSS issue", "context": "Enterprise production environment", "complaint": "Small pings and login work, large transfers stall over VPN.", "symptoms": "No obvious loss on underlay.", "evidence": ["DF ping fails above 1372 bytes", "TCP retransmissions on large segments"], "rootCause": "Tunnel overhead causes PMTU/MSS black-hole behavior." }, { "id": 14, "name": "DHCP relay failure", "context": "Enterprise production environment", "complaint": "Clients in one VLAN get APIPA; other VLANs receive leases.", "symptoms": "DHCP server is healthy.", "evidence": ["SVI VLAN 50 has no helper address", "Broadcast Discover visible only in VLAN 50"], "rootCause": "Missing DHCP relay/helper configuration." }, { "id": 15, "name": "Clock skew affecting authentication", "context": "Enterprise production environment", "complaint": "Users cannot authenticate to domain services after time drift.", "symptoms": "Network reachability and DNS are healthy.", "evidence": ["Client clock differs by 11 minutes", "Kerberos errors mention clock skew"], "rootCause": "NTP failure caused excessive clock skew." }];

  // ../../mnt/data/tracka_polish_v5/js/crypto.js
  var enc = new TextEncoder();
  var dec = new TextDecoder();
  var b64 = (b) => btoa(String.fromCharCode(...new Uint8Array(b)));
  var unb64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
  async function derive(pass, salt, iterations = 21e4) {
    const km = await crypto.subtle.importKey("raw", enc.encode(pass), "PBKDF2", false, ["deriveBits", "deriveKey"]);
    return crypto.subtle.deriveKey({ name: "PBKDF2", hash: "SHA-256", salt, iterations }, km, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
  }
  async function verifier(pass, salt, iterations = 21e4) {
    const km = await crypto.subtle.importKey("raw", enc.encode(pass), "PBKDF2", false, ["deriveBits"]);
    return crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt, iterations }, km, 256);
  }
  async function sha256(text) {
    return [...new Uint8Array(await crypto.subtle.digest("SHA-256", enc.encode(text)))].map((x) => x.toString(16).padStart(2, "0")).join("");
  }
  async function encryptJSON(data2, pass) {
    const salt = crypto.getRandomValues(new Uint8Array(16)), iv = crypto.getRandomValues(new Uint8Array(12)), iterations = 25e4, key = await derive(pass, salt, iterations);
    const plain = enc.encode(JSON.stringify(data2));
    const cipher = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, plain);
    return { schemaVersion: 1, timestamp: (/* @__PURE__ */ new Date()).toISOString(), algorithm: "AES-GCM", kdf: "PBKDF2-SHA-256", iterations, salt: b64(salt), iv: b64(iv), payload: b64(cipher), integrity: { cipherSha256: await sha256(b64(cipher)) } };
  }
  async function decryptJSON(pkg, pass) {
    if (pkg.schemaVersion !== 1) throw Error("Unsupported backup version");
    const key = await derive(pass, unb64(pkg.salt), pkg.iterations);
    const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: unb64(pkg.iv) }, key, unb64(pkg.payload));
    return JSON.parse(dec.decode(plain));
  }

  // ../../mnt/data/tracka_polish_v5/js/auth.js
  var AUTH_CONFIG = Object.freeze({
    salt: "iafsml+24so8l3b8cy2mCg==",
    iterations: 21e4,
    verifier: "/ZXBo/VKT1daB+R/yWFeSwGUR/mpDEHE6QDwSYQgqAc="
  });
  var config = null;
  async function initAuth() {
    if (!globalThis.crypto?.subtle) {
      throw new Error("Web Crypto API is unavailable. Use HTTPS or http://localhost.");
    }
    config = AUTH_CONFIG;
    return true;
  }
  async function login(pass) {
    if (!config) await initAuth();
    const normalized = String(pass ?? "");
    const bits = await verifier(normalized, unb64(config.salt), config.iterations);
    const ok = timingSafe(b64(bits), config.verifier);
    if (ok) {
      sessionStorage.setItem("tracka.session", "unlocked");
    }
    return ok;
  }
  function timingSafe(a, b) {
    if (a.length !== b.length) return false;
    let x = 0;
    for (let i = 0; i < a.length; i++) x |= a.charCodeAt(i) ^ b.charCodeAt(i);
    return x === 0;
  }
  var isUnlocked = () => sessionStorage.getItem("tracka.session") === "unlocked";
  var lock = () => sessionStorage.removeItem("tracka.session");

  // ../../mnt/data/tracka_polish_v5/js/curriculum.js
  var data = [];
  async function loadCurriculum() {
    data = CURRICULUM_DATA;
    return data;
  }
  var curriculum = () => data;
  function initialProgress() {
    return data.map((t) => ({ id: t.id, status: "Not Started", confidence: 1, plannedDate: "", completedDate: "", nextReviewDate: "", evidence: "", notes: "", masteryPassed: false, reviewCount: 0 }));
  }

  // ../../mnt/data/tracka_polish_v5/js/db.js
  var DB_NAME = "trackAOps";
  var DB_VERSION = 4;
  var stores = ["progress", "studyLogs", "habits", "interviews", "notes", "reviews", "labs", "scenarios", "weeklyReviews", "commits", "snapshots", "parking", "recordings", "dailyTasks", "questionBook"];
  var dbp;
  function db() {
    if (!dbp) dbp = new Promise((res, rej) => {
      const r = indexedDB.open(DB_NAME, DB_VERSION);
      r.onupgradeneeded = () => {
        const d = r.result;
        for (const s of stores) if (!d.objectStoreNames.contains(s)) d.createObjectStore(s, { keyPath: "id", autoIncrement: s !== "progress" });
      };
      r.onsuccess = () => {
        const d = r.result;
        d.onversionchange = () => d.close();
        res(d);
      };
      r.onerror = () => rej(r.error);
    });
    return dbp;
  }
  async function getAll(store) {
    const d = await db();
    return new Promise((res, rej) => {
      const r = d.transaction(store).objectStore(store).getAll();
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
  }
  async function put(store, val) {
    const d = await db();
    return new Promise((res, rej) => {
      const r = d.transaction(store, "readwrite").objectStore(store).put(val);
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
  }
  async function del(store, id) {
    const d = await db();
    return new Promise((res, rej) => {
      const r = d.transaction(store, "readwrite").objectStore(store).delete(id);
      r.onsuccess = () => res();
      r.onerror = () => rej(r.error);
    });
  }
  async function clear(store) {
    const d = await db();
    return new Promise((res, rej) => {
      const r = d.transaction(store, "readwrite").objectStore(store).clear();
      r.onsuccess = () => res();
      r.onerror = () => rej(r.error);
    });
  }
  async function dumpDB() {
    const out = {};
    for (const s of stores) out[s] = await getAll(s);
    return out;
  }
  async function restoreDB(data2) {
    for (const s of stores) {
      await clear(s);
      for (const v of data2[s] || []) await put(s, v);
    }
  }

  // ../../mnt/data/tracka_polish_v5/js/router.js
  var routes = ["command", "intelligence", "today", "learning", "review", "labs", "simulator", "study", "habits", "interview", "interviewStudio", "questionBook", "vault", "analytics", "weekly", "settings"];
  var labels = { command: "Command Center", intelligence: "Learning Intelligence", today: "Today", learning: "Learning Path", review: "Review Queue", labs: "Labs", simulator: "Troubleshooting Simulator", study: "Study Log", habits: "Habits", interview: "Interview Center", interviewStudio: "Interview Practice Studio", questionBook: "Interview Question Book", vault: "Knowledge Vault", analytics: "Analytics", weekly: "Weekly Review", settings: "Settings & Backup" };
  var cb;
  function initRouter(fn) {
    cb = fn;
    window.addEventListener("hashchange", go);
    go();
  }
  function go() {
    let r = location.hash.slice(1) || "command";
    if (!routes.includes(r)) r = "command";
    cb(r);
  }
  function navigate(r) {
    location.hash = r;
  }

  // ../../mnt/data/tracka_polish_v5/js/prerequisites.js
  function missingPrereqs(topic, progressMap) {
    return (topic.prerequisites || []).filter((id) => !["Completed", "Mastered"].includes(progressMap.get(id)?.status));
  }
  function eligible(topic, progressMap) {
    return missingPrereqs(topic, progressMap).length === 0;
  }
  function nextTopic(curriculum2, progress) {
    const m = new Map(progress.map((p) => [p.id, p]));
    return curriculum2.find((t) => {
      const p = m.get(t.id);
      return p?.status !== "Mastered" && eligible(t, m);
    }) || null;
  }

  // ../../mnt/data/tracka_polish_v5/js/review-engine.js
  var intervals = [1, 3, 7, 14, 30, 60, 90];
  var addDays = (d, n) => {
    const x = new Date(d);
    x.setDate(x.getDate() + n);
    return x.toISOString().slice(0, 10);
  };
  async function scheduleFirst(topicId) {
    const all = await getAll("reviews");
    if (all.some((r) => r.topicId === topicId && r.status === "due")) return;
    await put("reviews", { topicId, dueDate: addDays(/* @__PURE__ */ new Date(), 1), result: "", status: "due", round: 1, createdAt: (/* @__PURE__ */ new Date()).toISOString() });
  }
  async function recordReview(review, result) {
    const factor = { Forgot: 0.25, Weak: 0.5, Partial: 1, Strong: 1.7 }[result] || 1;
    review.result = result;
    review.status = "done";
    review.completedAt = (/* @__PURE__ */ new Date()).toISOString();
    await put("reviews", review);
    const nextRound = Math.min((review.round || 1) + 1, intervals.length);
    const base = intervals[nextRound - 1];
    await put("reviews", { topicId: review.topicId, dueDate: addDays(/* @__PURE__ */ new Date(), Math.max(1, Math.round(base * factor))), result: "", status: "due", round: nextRound, createdAt: (/* @__PURE__ */ new Date()).toISOString() });
  }
  function buckets(reviews) {
    const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    return { due: reviews.filter((r) => r.status === "due" && r.dueDate === today), overdue: reviews.filter((r) => r.status === "due" && r.dueDate < today), upcoming: reviews.filter((r) => r.status === "due" && r.dueDate > today).sort((a, b) => a.dueDate.localeCompare(b.dueDate)) };
  }

  // ../../mnt/data/tracka_polish_v5/js/analytics.js
  var day = (s) => new Date(s).toISOString().slice(0, 10);
  var sum = (a) => a.reduce((x, y) => x + y, 0);
  function metrics(state2, curriculum2) {
    const p = state2.progress, logs = state2.studyLogs, reviews = state2.reviews, labs = state2.labs, ints = state2.interviews, habits = state2.habits;
    const now = Date.now(), d7 = now - 7 * 864e5, d30 = now - 30 * 864e5;
    const mins = (since) => sum(logs.filter((l) => new Date(l.date).getTime() >= since).map((l) => +l.minutes || 0));
    const active = p.filter((x) => ["Learning", "Quick Practice"].includes(x.status)).length;
    const review = p.filter((x) => x.status === "Review").length;
    const mastered = p.filter((x) => x.status === "Mastered").length;
    const avg = p.length ? sum(p.map((x) => +x.confidence || 1)) / p.length : 0;
    const intScore = ints.length ? sum(ints.map((i) => ({ Weak: 35, Acceptable: 65, Strong: 100 })[i.result] || 0)) / ints.length : 0;
    const reviewDone = reviews.filter((r) => r.status === "done").length;
    const dates = [...new Set(logs.filter((l) => (+l.minutes || 0) > 0).map((l) => day(l.date)))].sort();
    let current = 0, longest = 0, run = 0, prev = null;
    for (const d of dates) {
      if (prev && new Date(d) - new Date(prev) === 864e5) run++;
      else run = 1;
      longest = Math.max(longest, run);
      prev = d;
    }
    const today = day(/* @__PURE__ */ new Date()), yday = day(new Date(Date.now() - 864e5));
    if (dates.at(-1) === today || dates.at(-1) === yday) current = run;
    const habitAvg = habits.length ? sum(habits.map((h) => +h.score || 0)) / habits.length : 0;
    const weights = { "Not Started": 0, "Learning": 0.2, "Quick Practice": 0.45, "Review": 0.65, "Completed": 0.8, "Mastered": 1 };
    const completion = p.length ? sum(p.map((x) => weights[x.status] ?? 0)) / p.length * 100 : 0;
    return { completion, mastered, active, review, avgConfidence: avg, interviewReadiness: intScore, labsDone: labs.filter((l) => l.status === "Completed").length, streak: current, longestStreak: longest, focusConsistency: habitAvg * 100, studyHours: sum(logs.map((l) => +l.minutes || 0)) / 60, study7: mins(d7) / 60, study30: mins(d30) / 60, reviewRate: reviews.length ? reviewDone / reviews.length * 100 : 0, labRate: labs.length ? labs.filter((l) => l.status === "Completed").length / labs.length * 100 : 0, weakCount: p.filter((x) => (+x.confidence || 1) <= 2 || x.status === "Review").length };
  }
  function weakness(state2, curriculum2) {
    const pm = new Map(state2.progress.map((p) => [p.id, p]));
    return curriculum2.map((t) => {
      const p = pm.get(t.id) || {};
      let score = (6 - (+p.confidence || 1)) * 12;
      if (p.status === "Review") score += 20;
      if (!p.evidence) score += 8;
      score += state2.reviews.filter((r) => r.topicId === t.id && ["Forgot", "Weak"].includes(r.result)).length * 18;
      score += state2.interviews.filter((i) => i.topicId === t.id && i.result === "Weak").length * 15;
      return { ...t, score, reasons: [(+p.confidence || 1) <= 2 ? "Low confidence" : null, !p.evidence ? "No practical evidence" : null, p.status === "Review" ? "Needs review" : null].filter(Boolean) };
    }).sort((a, b) => b.score - a.score);
  }
  function stageCompletion(state2, curriculum2) {
    var _a;
    const pm = new Map(state2.progress.map((p) => [p.id, p])), m = {};
    for (const t of curriculum2) {
      m[_a = t.stage] ?? (m[_a] = { done: 0, total: 0 });
      m[t.stage].total++;
      const sw = { "Not Started": 0, "Learning": 0.2, "Quick Practice": 0.45, "Review": 0.65, "Completed": 0.8, "Mastered": 1 };
      m[t.stage].done += sw[pm.get(t.id)?.status] ?? 0;
    }
    return Object.entries(m).map(([label, v]) => ({ label, value: v.total ? v.done / v.total * 100 : 0 }));
  }
  function last30Study(logs) {
    const out = [];
    for (let i = 29; i >= 0; i--) {
      const d = new Date(Date.now() - i * 864e5).toISOString().slice(0, 10);
      out.push({ label: d.slice(5), value: sum(logs.filter((l) => day(l.date) === d).map((l) => +l.minutes || 0)) });
    }
    return out;
  }

  // ../../mnt/data/tracka_polish_v5/js/charts.js
  function barChart(canvas, data2, { max = 100 } = {}) {
    draw(canvas, (ctx, w, h) => {
      const pad = { l: 110, r: 20, t: 20, b: 25 }, cw = w - pad.l - pad.r, ch = h - pad.t - pad.b;
      ctx.font = "11px system-ui";
      data2.forEach((d, i) => {
        const y = pad.t + i * (ch / data2.length) + 4, bh = Math.max(6, ch / data2.length - 8);
        ctx.fillStyle = "#e6edf3";
        ctx.fillRect(pad.l, y, cw, bh);
        ctx.fillStyle = "#3f8f62";
        ctx.fillRect(pad.l, y, cw * Math.min(1, d.value / max), bh);
        ctx.fillStyle = "#243b53";
        ctx.fillText(trim(d.label, 18), 8, y + bh - 2);
        ctx.fillText(Math.round(d.value) + "%", pad.l + cw - 32, y + bh - 2);
      });
    });
  }
  function lineChart(canvas, data2) {
    draw(canvas, (ctx, w, h) => {
      const p = 28, vals = data2.map((d) => d.value), max = Math.max(1, ...vals), cw = w - p * 2, ch = h - p * 2;
      ctx.strokeStyle = "#d9e2ec";
      for (let i = 0; i < 4; i++) {
        const y = p + i * ch / 3;
        ctx.beginPath();
        ctx.moveTo(p, y);
        ctx.lineTo(w - p, y);
        ctx.stroke();
      }
      ctx.strokeStyle = "#2f6b9a";
      ctx.lineWidth = 2;
      ctx.beginPath();
      data2.forEach((d, i) => {
        const x = p + i * cw / Math.max(1, data2.length - 1), y = h - p - d.value / max * ch;
        i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      });
      ctx.stroke();
      ctx.fillStyle = "#627d98";
      ctx.font = "10px system-ui";
      for (let i = 0; i < data2.length; i += Math.max(1, Math.floor(data2.length / 6))) ctx.fillText(data2[i].label, p + i * cw / Math.max(1, data2.length - 1) - 12, h - 8);
    });
  }
  function donutChart(canvas, parts) {
    draw(canvas, (ctx, w, h) => {
      const total = parts.reduce((a2, b) => a2 + b.value, 0) || 1, cx = w / 2, cy = h / 2, r = Math.min(w, h) * 0.32, colors = ["#2f6b9a", "#3f8f62", "#d99b2b", "#7057a3", "#d66a3a", "#4c9fbe"];
      let a = -Math.PI / 2;
      parts.forEach((p, i) => {
        const n = a + p.value / total * Math.PI * 2;
        ctx.beginPath();
        ctx.strokeStyle = colors[i % colors.length];
        ctx.lineWidth = r * 0.38;
        ctx.arc(cx, cy, r, a, n);
        ctx.stroke();
        a = n;
      });
      ctx.fillStyle = "#243b53";
      ctx.font = "700 22px system-ui";
      ctx.textAlign = "center";
      ctx.fillText(Math.round(total), cx, cy + 7);
      ctx.textAlign = "start";
    });
  }
  function draw(c, fn) {
    const dpr = devicePixelRatio || 1, r = c.getBoundingClientRect();
    c.width = r.width * dpr;
    c.height = r.height * dpr;
    const x = c.getContext("2d");
    x.scale(dpr, dpr);
    x.clearRect(0, 0, r.width, r.height);
    fn(x, r.width, r.height);
  }
  function trim(s, n) {
    return s.length > n ? s.slice(0, n - 1) + "\u2026" : s;
  }

  // ../../mnt/data/tracka_polish_v5/js/backup.js
  var blobToB64 = (blob) => new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(String(r.result).split(",")[1]);
    r.onerror = () => rej(r.error);
    r.readAsDataURL(blob);
  });
  async function serialize(data2) {
    const out = structuredClone(data2);
    out.recordings = [];
    for (const r of data2.recordings || []) {
      const x = { ...r };
      if (x.blob instanceof Blob) {
        x.blobData = await blobToB64(x.blob);
        x.blobType = x.blob.type;
        delete x.blob;
      }
      out.recordings.push(x);
    }
    return out;
  }
  function b64Blob(s, type) {
    const bin = atob(s), u = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
    return new Blob([u], { type });
  }
  function hydrate(data2) {
    data2.recordings = (data2.recordings || []).map((r) => {
      if (r.blobData) {
        r.blob = b64Blob(r.blobData, r.blobType || "audio/webm");
        delete r.blobData;
        delete r.blobType;
      }
      return r;
    });
    return data2;
  }
  async function exportBackup(pass) {
    const pkg = await encryptJSON(await serialize(await dumpDB()), pass);
    download(JSON.stringify(pkg), `track-a-backup-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.tracka`);
  }
  async function importBackup(file, pass) {
    const pkg = JSON.parse(await file.text());
    const data2 = hydrate(await decryptJSON(pkg, pass));
    await restoreDB(data2);
    return data2;
  }
  function download(text, name, type = "application/json") {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([text], { type }));
    a.download = name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1e3);
  }

  // ../../mnt/data/tracka_polish_v5/js/commits.js
  async function createCommit(message = "Final changes") {
    const data2 = await dumpDB();
    delete data2.commits;
    delete data2.snapshots;
    const payload = JSON.stringify(data2);
    const hash = await sha256(payload);
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const snapshotId = await put("snapshots", { timestamp, hash, payload });
    const id = await put("commits", { timestamp, hash, snapshotId, message });
    return { id, timestamp, hash, snapshotId };
  }
  async function history() {
    return (await getAll("commits")).sort((a, b) => b.timestamp.localeCompare(a.timestamp));
  }
  async function latestSnapshot() {
    const c = (await history())[0];
    if (!c) return null;
    const s = (await getAll("snapshots")).find((x) => x.id === c.snapshotId);
    return s ? { commit: c, snapshot: s } : null;
  }
  async function diffDraft() {
    const last = await latestSnapshot(), current = await dumpDB();
    delete current.commits;
    delete current.snapshots;
    if (!last) return { summary: ["No previous commit. Entire draft is new."], raw: null };
    const prev = JSON.parse(last.snapshot.payload), summary = [];
    for (const k of Object.keys(current)) {
      const a = JSON.stringify(prev[k] || []), b = JSON.stringify(current[k] || []);
      if (a !== b) summary.push(`${k}: changed (${(prev[k] || []).length} \u2192 ${(current[k] || []).length} records)`);
    }
    return { summary: summary.length ? summary : ["No changes since last commit."], raw: { prev, current } };
  }
  async function exportSnapshot(id) {
    const s = (await getAll("snapshots")).find((x) => x.id === id);
    if (!s) throw Error("Snapshot not found");
    download(JSON.stringify({ schemaVersion: 1, timestamp: s.timestamp, hash: s.hash, data: JSON.parse(s.payload) }, null, 2), `track-a-snapshot-${s.timestamp.slice(0, 10)}.json`);
  }

  // ../../mnt/data/tracka_polish_v5/js/ui.js
  var el = (tag, attrs = {}, ...kids) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") n.className = v;
      else if (k.startsWith("on")) n.addEventListener(k.slice(2).toLowerCase(), v);
      else if (k === "text") n.textContent = v;
      else n.setAttribute(k, v);
    }
    for (const k of kids.flat()) n.append(k?.nodeType ? k : document.createTextNode(k ?? ""));
    return n;
  };
  function toast(msg) {
    const t = document.querySelector("#toast");
    t.textContent = msg;
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 2200);
  }
  function modal(title, content, actions = []) {
    const root = document.querySelector("#modalRoot"), back = el("div", { class: "modal-backdrop" }), m = el("div", { class: "modal" }), head = el("div", { class: "modal-head" }, el("h2", { text: title }), el("button", { class: "btn", onClick: () => back.remove(), text: "Close" }));
    m.append(head, content);
    if (actions.length) {
      const bar = el("div", { class: "toolbar" });
      for (const a of actions) bar.append(el("button", { class: `btn ${a.kind || ""}`, onClick: async () => {
        await a.run(back);
      }, text: a.label }));
      m.append(bar);
    }
    back.append(m);
    root.append(back);
    return back;
  }
  function card(title, content, className = "") {
    const c = el("section", { class: `card ${className}` });
    if (title) c.append(el("h2", { text: title }));
    c.append(content);
    return c;
  }
  function empty(text) {
    return el("div", { class: "empty", text });
  }

  // ../../mnt/data/tracka_polish_v5/js/drive.js
  var tokenClient = null;
  var accessToken = "";
  function loadScript(src) {
    return new Promise((res, rej) => {
      if (document.querySelector(`script[src="${src}"]`)) return res();
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      s.onload = res;
      s.onerror = () => rej(new Error("Unable to load Google Identity Services"));
      document.head.appendChild(s);
    });
  }
  async function connectDrive(clientId) {
    if (!clientId) throw new Error("Add your Google OAuth Client ID in Settings first.");
    await loadScript("https://accounts.google.com/gsi/client");
    return new Promise((resolve, reject) => {
      tokenClient = google.accounts.oauth2.initTokenClient({ client_id: clientId, scope: "https://www.googleapis.com/auth/drive.file", callback: (r) => {
        if (r.error) return reject(new Error(r.error));
        accessToken = r.access_token;
        resolve(true);
      } });
      tokenClient.requestAccessToken({ prompt: "" });
    });
  }
  async function uploadToDrive(blob, name, mime = "application/octet-stream") {
    if (!accessToken) throw new Error("Connect Google Drive first.");
    const meta = { name };
    const form = new FormData();
    form.append("metadata", new Blob([JSON.stringify(meta)], { type: "application/json" }));
    form.append("file", blob, name);
    const r = await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,webViewLink", { method: "POST", headers: { Authorization: `Bearer ${accessToken}` }, body: form });
    if (!r.ok) throw new Error(`Drive upload failed (${r.status})`);
    return r.json();
  }
  var driveConnected = () => !!accessToken;

  // ../../mnt/data/tracka_polish_v5/js/intelligence.js
  var day2 = (x) => new Date(x).toISOString().slice(0, 10);
  var daysAgo = (n) => day2(Date.now() - n * 864e5);
  var sum2 = (a) => a.reduce((s, x) => s + x, 0);
  function learningIntelligence(state2, curriculum2) {
    const progress = new Map(state2.progress.map((x) => [x.id, x]));
    const reviews = buckets(state2.reviews || []);
    const logs = state2.studyLogs || [], interviews = state2.interviews || [], labs = state2.labs || [];
    const weak = [];
    for (const t of curriculum2) {
      const p = progress.get(t.id) || {};
      let score = 0, reasons = [];
      if ((p.confidence || 1) <= 2) {
        score += 28;
        reasons.push("low confidence");
      } else if ((p.confidence || 1) === 3) {
        score += 14;
        reasons.push("medium confidence");
      }
      if (p.status === "Review") {
        score += 20;
        reasons.push("in review");
      }
      if (p.status === "Completed" && !p.masteryPassed) {
        score += 22;
        reasons.push("mastery check not passed");
      }
      if (p.nextReviewDate && p.nextReviewDate < day2(Date.now())) {
        score += 18;
        reasons.push("review overdue");
      }
      if (!p.evidence && ["Completed", "Mastered"].includes(p.status)) {
        score += 12;
        reasons.push("missing evidence");
      }
      if (score) weak.push({ id: t.id, topic: t.topic, stage: t.stage, score, reasons });
    }
    weak.sort((a, b) => b.score - a.score);
    const next = nextTopic(curriculum2, state2.progress);
    const last7 = logs.filter((x) => (x.date || "").slice(0, 10) >= daysAgo(6));
    const minutes7 = sum2(last7.map((x) => +x.minutes || 0));
    const activeDays = new Set(last7.map((x) => (x.date || "").slice(0, 10))).size;
    const recentInterview = interviews.slice().sort((a, b) => (b.date || "").localeCompare(a.date || "")).slice(0, 10);
    const weakAnswers = recentInterview.filter((x) => x.result === "Weak").length;
    const incompleteLabs = labs.filter((x) => x.status !== "Completed").length;
    const alerts = [];
    if (reviews.overdue.length) alerts.push({ level: "high", title: "Review debt", message: `${reviews.overdue.length} review item(s) are overdue. Clear the oldest items before heavy new learning.` });
    if (activeDays < 3) alerts.push({ level: "medium", title: "Consistency risk", message: `Only ${activeDays} active study day(s) in the last 7 days. Use Minimum Day mode to protect continuity.` });
    if (weakAnswers >= 3) alerts.push({ level: "high", title: "Interview weakness cluster", message: `${weakAnswers} of your recent answers were Weak. Re-record the same categories using structured answer frameworks.` });
    if (minutes7 < 180) alerts.push({ level: "medium", title: "Low study volume", message: `${minutes7} minutes logged in 7 days. Protect a realistic daily block rather than compensating with one long session.` });
    if (!alerts.length) alerts.push({ level: "good", title: "System stable", message: "No major learning-risk signal is currently above threshold. Continue the dependency path and scheduled reviews." });
    let priority = "New Learning", reason = next ? "Next dependency-eligible curriculum item." : "Curriculum sequence has no eligible unfinished item.";
    if (reviews.overdue.length) {
      priority = "Review Recovery";
      reason = "Overdue review debt can create false progress and should be reduced first.";
    } else if (weak[0]?.score >= 45) {
      priority = "Weakness Repair";
      reason = `${weak[0].topic} has a high weakness score from ${weak[0].reasons.join(", ")}.`;
    }
    const plan = [];
    if (reviews.overdue.length) plan.push({ minutes: 20, task: `Review ${Math.min(3, reviews.overdue.length)} overdue topic(s)`, why: "Reduce memory decay and review debt." });
    if (weak[0]) plan.push({ minutes: 25, task: `Repair weakness: ${weak[0].topic}`, why: weak[0].reasons.join(", ") });
    if (next) plan.push({ minutes: 45, task: `Learn and practice: ${next.topic}`, why: "Dependency-eligible next topic." });
    plan.push({ minutes: 15, task: "Interview explanation drill", why: "Convert technical knowledge into clear spoken recall." });
    plan.push({ minutes: 10, task: "End-session recall + evidence log", why: "Expose gaps and leave proof of practical work." });
    return { next, weak: weak.slice(0, 8), alerts, priority, reason, plan, minutes7, activeDays, weakAnswers, incompleteLabs, reviews };
  }
  function recommendInterviewQuestions(state2, questions2, limit = 8) {
    const results = state2.interviews || [], book = state2.questionBook || [];
    const categoryPenalty = /* @__PURE__ */ new Map();
    results.slice().sort((a, b) => (b.date || "").localeCompare(a.date || "")).slice(0, 30).forEach((r) => {
      const add = r.result === "Weak" ? 35 : r.result === "Acceptable" ? 12 : -8;
      categoryPenalty.set(r.category, (categoryPenalty.get(r.category) || 0) + add);
    });
    const saved = new Map(book.map((x) => [String(x.questionId), x]));
    return questions2.map((q) => {
      const b = saved.get(String(q.id)) || {};
      let score = categoryPenalty.get(q.category) || 0, reasons = [];
      if (score > 0) reasons.push("weak recent category");
      if (b.status === "Needs Practice") {
        score += 40;
        reasons.push("marked needs practice");
      }
      if (b.nextReviewDate && b.nextReviewDate <= day2(Date.now())) {
        score += 30;
        reasons.push("review due");
      }
      if (b.favorite) {
        score += 5;
        reasons.push("favorite");
      }
      if (!results.some((r) => String(r.questionId) === String(q.id))) {
        score += 8;
        reasons.push("not yet practiced");
      }
      return { ...q, score, reasons };
    }).sort((a, b) => b.score - a.score).slice(0, limit);
  }

  // ../../mnt/data/tracka_polish_v5/js/app.js
  var $ = (s) => document.querySelector(s);
  var state = {};
  var questions = [];
  var scenarios = [];
  var route = "command";
  var timer = { seconds: 0, running: false, id: null, start: null };
  var navOrder = ["command", "intelligence", "today", "learning", "review", "labs", "simulator", "study", "habits", "interview", "interviewStudio", "questionBook", "vault", "analytics", "weekly", "settings"];
  var resourcesLoaded = false;
  async function loadResources() {
    if (resourcesLoaded) return;
    await loadCurriculum();
    questions = INTERVIEW_DATA;
    scenarios = SCENARIO_DATA;
    resourcesLoaded = true;
  }
  async function boot() {
    bindLogin();
    try {
      await initAuth();
      if (isUnlocked()) await showApp();
    } catch (e) {
      console.error("Authentication initialization failed:", e);
      $("#loginError").textContent = e?.message || "Authentication initialization failed.";
    }
  }
  function bindLogin() {
    const form = $("#loginForm");
    if (!form) throw new Error("Login form is missing from index.html");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const error = $("#loginError"), button = e.submitter;
      error.textContent = "Checking password\u2026";
      if (button) button.disabled = true;
      try {
        const ok = await login($("#loginPassword").value);
        if (!ok) {
          error.textContent = "Incorrect password.";
          $("#loginPassword").focus();
          $("#loginPassword").select();
          return;
        }
        error.textContent = "Password accepted. Loading portal\u2026";
        await showApp();
        error.textContent = "";
      } catch (err) {
        console.error("Login error:", err);
        error.textContent = `Login failed: ${err?.message || "unknown error"}`;
      } finally {
        if (button) button.disabled = false;
      }
    });
  }
  async function showApp() {
    await loadResources();
    await loadState();
    $("#login").classList.add("hidden");
    $("#app").classList.remove("hidden");
    renderNav();
    bindGlobal();
    initRouter(async (r) => {
      route = r;
      await render(r);
    });
  }
  function renderNav() {
    const n = $("#nav");
    n.replaceChildren(...navOrder.map((r) => el("button", { class: "nav-btn", text: labels[r], onClick: () => navigate(r), "data-route": r })));
  }
  function bindGlobal() {
    $("#lockPortal").onclick = () => {
      lock();
      location.reload();
    };
    $("#menuBtn").onclick = () => document.querySelector(".sidebar").classList.toggle("open");
    $("#quickSession").onclick = () => navigate("today");
    const themeButtons = [...document.querySelectorAll(".theme-btn")], savedTheme = localStorage.getItem("tracka.theme") || "default";
    document.body.dataset.theme = savedTheme;
    const syncThemeButtons = (themeName) => themeButtons.forEach((b) => b.classList.toggle("active", b.dataset.theme === themeName));
    syncThemeButtons(savedTheme);
    themeButtons.forEach((b) => b.onclick = () => {
      document.body.dataset.theme = b.dataset.theme;
      localStorage.setItem("tracka.theme", b.dataset.theme);
      syncThemeButtons(b.dataset.theme);
    });
    initFocusDock();
  }
  var FOCUS_QUOTES = [
    "Clarity comes from testing what you think you know.",
    "A packet capture is evidence. A guess is only a hypothesis.",
    "Small, repeatable sessions beat occasional heroic effort.",
    "Mastery means you can explain it, test it, break it and repair it.",
    "When troubleshooting, change one variable and preserve the evidence.",
    "The goal is not to finish topics. The goal is to become operational.",
    "If you cannot explain the path, you cannot reliably troubleshoot the failure.",
    "Practice recall before rereading. Retrieval exposes the real gap.",
    "Build proof: diagrams, configs, captures, logs and clear explanations.",
    "A strong engineer narrows scope before reaching for commands.",
    "Consistency protects momentum when motivation is unreliable.",
    "Learn the normal state deeply; anomalies become easier to recognize."
  ];
  var focusTimerState = { seconds: 25 * 60, initial: 25 * 60, running: false, timer: null };
  function initFocusDock() {
    const dock = $("#focusDock");
    if (!dock || dock.dataset.bound === "1") return;
    dock.dataset.bound = "1";
    const clock = $("#focusClock"), objective = $("#focusObjective"), quote = $("#focusQuote");
    const renderClock = () => {
      const m = Math.floor(focusTimerState.seconds / 60), s = focusTimerState.seconds % 60;
      clock.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
      document.title = focusTimerState.running ? `${clock.textContent} \xB7 TRACK A` : "TRACK A \u2014 Execution Command Center";
    };
    const randomQuote = () => {
      let q = FOCUS_QUOTES[Math.floor(Math.random() * FOCUS_QUOTES.length)];
      if (q === quote.textContent && FOCUS_QUOTES.length > 1) q = FOCUS_QUOTES[(FOCUS_QUOTES.indexOf(q) + 1) % FOCUS_QUOTES.length];
      quote.textContent = q;
    };
    const stop = () => {
      focusTimerState.running = false;
      if (focusTimerState.timer) {
        clearInterval(focusTimerState.timer);
        focusTimerState.timer = null;
      }
      renderClock();
    };
    const start = () => {
      if (focusTimerState.running) return;
      focusTimerState.running = true;
      dock.classList.add("active-session");
      focusTimerState.timer = setInterval(() => {
        if (focusTimerState.seconds > 0) {
          focusTimerState.seconds--;
          renderClock();
        } else {
          stop();
          dock.classList.remove("active-session");
          toast("Focus block complete. Record evidence and do a short recall before moving on.");
        }
      }, 1e3);
      renderClock();
    };
    $("#focusDockToggle").onclick = () => dock.classList.toggle("open");
    $("#focusDockClose").onclick = () => dock.classList.remove("open");
    $("#focusStart").onclick = start;
    $("#focusPause").onclick = stop;
    $("#focusReset").onclick = () => {
      stop();
      focusTimerState.seconds = focusTimerState.initial;
      dock.classList.remove("active-session");
      renderClock();
    };
    dock.querySelectorAll("[data-focus-min]").forEach((b) => b.onclick = () => {
      stop();
      const min = +b.dataset.focusMin;
      focusTimerState.initial = focusTimerState.seconds = min * 60;
      dock.querySelectorAll("[data-focus-min]").forEach((x) => x.classList.toggle("active", x === b));
      renderClock();
    });
    objective.value = localStorage.getItem("tracka.focusObjective") || "";
    objective.oninput = () => localStorage.setItem("tracka.focusObjective", objective.value);
    $("#newQuote").onclick = randomQuote;
    const deepBtn = $("#deepFocusToggle");
    deepBtn.onclick = () => {
      document.body.classList.toggle("deep-focus");
      deepBtn.textContent = document.body.classList.contains("deep-focus") ? "Exit Deep Focus" : "Enter Deep Focus";
    };
    const distractionInput = $("#quickDistraction"), distractionList = $("#quickDistractionList");
    const getDistractions = () => {
      try {
        return JSON.parse(localStorage.getItem("tracka.quickDistractions") || "[]");
      } catch {
        return [];
      }
    };
    const drawDistractions = () => {
      const items = getDistractions().slice(-3).reverse();
      distractionList.replaceChildren(...items.map((x) => el("div", { class: "quick-distraction-item", text: x })));
    };
    distractionInput.onkeydown = (e) => {
      if (e.key === "Enter" && distractionInput.value.trim()) {
        const items = getDistractions();
        items.push(distractionInput.value.trim());
        localStorage.setItem("tracka.quickDistractions", JSON.stringify(items.slice(-20)));
        distractionInput.value = "";
        drawDistractions();
        toast("Distraction parked. Return to the current objective.");
      }
    };
    document.addEventListener("keydown", (e) => {
      if (e.altKey && e.key.toLowerCase() === "f") {
        e.preventDefault();
        dock.classList.toggle("open");
      }
    });
    drawDistractions();
    randomQuote();
    renderClock();
  }
  async function loadState() {
    let p = await getAll("progress");
    if (!p.length) {
      p = initialProgress();
      for (const x of p) await put("progress", x);
    }
    state = { progress: p, studyLogs: await getAll("studyLogs"), habits: await getAll("habits"), interviews: await getAll("interviews"), notes: await getAll("notes"), reviews: await getAll("reviews"), labs: await getAll("labs"), scenarios: await getAll("scenarios"), weeklyReviews: await getAll("weeklyReviews"), parking: await getAll("parking"), recordings: await getAll("recordings"), dailyTasks: await getAll("dailyTasks"), questionBook: await getAll("questionBook") };
    if (!state.labs.length) {
      for (let i = 1; i <= 8; i++) await put("labs", { id: i, status: "Not Started", evidence: "", rca: "" });
      state.labs = await getAll("labs");
    }
  }
  async function refresh() {
    await loadState();
    await render(route);
  }
  function setSaved(text = "Saved") {
    $("#saveState").textContent = text;
    setTimeout(() => $("#saveState").textContent = "Saved", 900);
  }
  async function render(r) {
    document.querySelectorAll(".nav-btn").forEach((b) => b.classList.toggle("active", b.dataset.route === r));
    $("#pageTitle").textContent = labels[r];
    $("#pageSubtitle").textContent = subtitles[r] || "";
    const v = $("#view");
    v.replaceChildren(el("div", { class: "empty", text: "Loading\u2026" }));
    try {
      const node = await pages[r]();
      const shell = el("div", { class: `module-shell module-${r}` });
      shell.append(node);
      v.replaceChildren(shell);
      enhanceRelevantControls(shell, r);
      v.focus();
      document.querySelector(".sidebar").classList.remove("open");
    } catch (e) {
      console.error(e);
      v.replaceChildren(el("div", { class: "callout danger", text: `Unable to render page: ${e.message}` }));
    }
  }
  function enhanceRelevantControls(root, route2) {
    const buttonRoutes = /* @__PURE__ */ new Set(["labs", "habits", "interview", "interviewStudio", "questionBook"]);
    if (buttonRoutes.has(route2)) {
      root.querySelectorAll("select").forEach((selectEl) => {
        if (selectEl.dataset.enhanced === "1" || selectEl.multiple || selectEl.options.length > 6) return;
        selectEl.dataset.enhanced = "1";
        const group = el("div", { class: "segmented-control", "data-module": route2 });
        const sync = () => [...group.children].forEach((b) => b.classList.toggle("active", b.dataset.value === selectEl.value));
        [...selectEl.options].forEach((opt) => {
          const b = el("button", { class: "segment-btn", type: "button", text: opt.textContent || opt.value });
          b.dataset.value = opt.value;
          b.onclick = () => {
            selectEl.value = opt.value;
            sync();
            selectEl.dispatchEvent(new Event("change", { bubbles: true }));
            selectEl.dispatchEvent(new Event("input", { bubbles: true }));
          };
          group.append(b);
        });
        sync();
        selectEl.classList.add("enhanced-select-source");
        selectEl.insertAdjacentElement("afterend", group);
      });
    }
    root.querySelectorAll('textarea,input:not([type="checkbox"]):not([type="radio"]):not([type="hidden"])').forEach((x) => x.classList.add("managed-input"));
  }
  var subtitles = { command: "Execution, evidence and readiness", intelligence: "Adaptive priorities, risks and next actions", today: "One topic. One outcome. One proof.", learning: "Dependency-ordered curriculum and mastery state", review: "Spaced revision and weak-topic recovery", labs: "Production integration evidence", simulator: "Evidence-driven incident reasoning", study: "Time, outcomes and evidence", habits: "Consistency without tracking overload", interview: "Question drills and readiness scoring", interviewStudio: "Record, review, transcribe and improve your delivery", questionBook: "Save, organize and revisit interview questions", vault: "Searchable technical memory", analytics: "Signals that change your next action", weekly: "Course correction based on evidence", settings: "Security, commits and portable backups" };
  var pages = { command: commandPage, intelligence: intelligencePage, today: todayPage, learning: learningPage, review: reviewPage, labs: labsPage, simulator: simulatorPage, study: studyPage, habits: habitsPage, interview: interviewPage, interviewStudio: interviewStudioPage, questionBook: questionBookPage, vault: vaultPage, analytics: analyticsPage, weekly: weeklyPage, settings: settingsPage };
  function kpi(label, value, hint = "") {
    return el("div", { class: "card kpi" }, el("div", { class: "label", text: label }), el("div", { class: "value", text: value }), el("div", { class: "hint", text: hint }));
  }
  async function intelligencePage() {
    const intel = learningIntelligence(state, curriculum()), root = el("div", { class: "section-stack" });
    root.append(el(
      "section",
      { class: "intelligence-hero" },
      el("div", {}, el("span", { class: "badge", text: "LOCAL INTELLIGENCE ENGINE" }), el("h2", { text: `Priority: ${intel.priority}` }), el("p", { text: intel.reason })),
      el("div", { class: "intel-score" }, el("strong", { text: String(intel.activeDays) }), el("span", { text: "active days / 7" }))
    ));
    const plan = el("div", { class: "smart-plan" });
    intel.plan.forEach((x, i) => plan.append(el("div", { class: "smart-plan-row" }, el("span", { class: "plan-order", text: String(i + 1) }), el("div", {}, el("strong", { text: x.task }), el("small", { text: x.why })), el("span", { class: "plan-minutes", text: `${x.minutes} min` }))));
    root.append(card("Adaptive Execution Plan", plan));
    const alerts = el("div", { class: "risk-grid" }, ...intel.alerts.map((x) => el("div", { class: `risk-card ${x.level}` }, el("strong", { text: x.title }), el("p", { text: x.message }))));
    root.append(card("Learning Risk Monitor", alerts));
    const weakBox = el("div", { class: "weak-list" });
    if (!intel.weak.length) weakBox.append(empty("No weakness signals yet. Add confidence, reviews, evidence and interview results to improve recommendations."));
    intel.weak.slice(0, 5).forEach((w, i) => weakBox.append(el("div", { class: "weak-row" }, el("span", { class: "weak-rank", text: `#${i + 1}` }), el("div", {}, el("strong", { text: w.topic }), el("small", { text: `${w.stage} \xB7 ${w.reasons.join(", ")}` })), el("span", { class: "weak-score", text: String(w.score) }))));
    root.append(card("Top Weakness Signals", weakBox));
    const recs = recommendInterviewQuestions(state, questions, 6);
    root.append(card("Recommended Interview Drills", el("div", { class: "question-recs" }, ...recs.map((q) => el("div", { class: "question-rec" }, el("span", { class: "badge", text: q.category }), el("strong", { text: q.question }), el("small", { text: q.reasons.length ? q.reasons.join(" \xB7 ") : "balanced practice" }), el("button", { class: "btn", text: "Practice", onClick: () => navigate("interviewStudio") }))))));
    root.append(card("How the Intelligence Works", el(
      "div",
      { class: "insight-grid" },
      el("div", { class: "insight" }, el("strong", { text: "Dependency aware" }), el("small", { text: "New-topic recommendations follow prerequisite eligibility rather than simply choosing the next row." })),
      el("div", { class: "insight" }, el("strong", { text: "Evidence aware" }), el("small", { text: "Low confidence, failed mastery, overdue reviews and missing evidence increase weakness priority." })),
      el("div", { class: "insight" }, el("strong", { text: "Adaptive, not AI theatre" }), el("small", { text: "Recommendations are calculated locally from your actual tracker data. No secret API key or external model is required." }))
    )));
    return root;
  }
  async function commandPage() {
    const m = metrics(state, curriculum()), weak = weakness(state, curriculum()), next = nextTopic(curriculum(), state.progress), b = buckets(state.reviews);
    const root = el("div", { class: "section-stack" });
    const quotes = [
      ["The expert in anything was once a beginner.", "Helen Hayes"],
      ["Success is the sum of small efforts, repeated day in and day out.", "Robert Collier"],
      ["What I cannot create, I do not understand.", "Richard Feynman"],
      ["The beautiful thing about learning is that nobody can take it away from you.", "B.B. King"],
      ["An investment in knowledge pays the best interest.", "Benjamin Franklin"],
      ["Tell me and I forget. Teach me and I remember. Involve me and I learn.", "Benjamin Franklin"]
    ];
    const q = quotes[(/* @__PURE__ */ new Date()).getDate() % quotes.length];
    const hero = el(
      "section",
      { class: "dashboard-hero" },
      el(
        "div",
        { class: "hero-copy" },
        el("div", { class: "badge", text: "LEARNING OPERATIONS" }),
        el("h2", { text: next ? `Next: ${next.topic}` : "Curriculum cycle complete" }),
        el("p", { text: next ? next.learn : "Use review, interview drills and integration labs to maintain mastery." }),
        el(
          "div",
          { class: "hero-actions" },
          el("button", { class: "btn primary", text: "Open Today Plan", onClick: () => navigate("today") }),
          el("button", { class: "btn", text: "Review Queue", onClick: () => navigate("review") }),
          el("button", { class: "btn", text: "Start Simulator", onClick: () => navigate("simulator") })
        )
      ),
      el("div", { class: "quote-panel" }, el("blockquote", { text: `\u201C${q[0]}\u201D` }), el("cite", { text: `\u2014 ${q[1]}` }))
    );
    root.append(hero);
    const ring = (label, value, color = "var(--green)") => el(
      "div",
      {},
      el("div", { class: "progress-ring", style: `--p:${Math.max(0, Math.min(100, value))};--ring:${color}` }, el("span", { class: "ring-value", text: `${Math.round(value)}%` })),
      el("div", { class: "ring-label", text: label })
    );
    root.append(card("Progress Pulse", el(
      "div",
      { class: "ring-grid" },
      ring("Curriculum Progress", m.completion, "var(--green)"),
      ring("Interview Readiness", m.interviewReadiness, "var(--blue)"),
      ring("Review Completion", m.reviewRate, "var(--amber)"),
      ring("Lab Completion", m.labRate, "var(--purple)")
    )));
    root.append(el(
      "div",
      { class: "grid kpis" },
      kpi("Topics Mastered", m.mastered, `${state.progress.filter((x) => x.status === "Completed").length} completed, awaiting mastery`),
      kpi("Currently Learning", m.active, "Learning + quick practice"),
      kpi("Average Confidence", m.avgConfidence.toFixed(1), "Scale 1\u20135"),
      kpi("Study Time \xB7 7d", `${m.study7.toFixed(1)}h`, `${m.study30.toFixed(1)}h in 30 days`),
      kpi("Labs Completed", m.labsDone, `${m.labRate.toFixed(0)}% completion rate`),
      kpi("Study Streak", `${m.streak} days`, `Longest ${m.longestStreak}`),
      kpi("Focus Consistency", `${m.focusConsistency.toFixed(0)}%`, "Habit average"),
      kpi("Overdue Reviews", b.overdue.length, b.overdue.length ? "Priority recovery work" : "Review queue healthy")
    ));
    const insights = el(
      "div",
      { class: "insight-grid" },
      el("div", { class: "insight" }, el("strong", { text: "Recommended next action" }), el("small", { text: next ? `Study ${next.topic}. It is dependency-eligible and is the next unfinished topic in the learning sequence.` : "Run a lab or review a weak topic." })),
      el("div", { class: "insight" }, el("strong", { text: "Weakest area" }), el("small", { text: weak[0] ? `${weak[0].topic}: ${weak[0].reasons.join(", ") || "needs stronger evidence"}.` : "No critical weakness detected yet." })),
      el("div", { class: "insight" }, el("strong", { text: "Review pressure" }), el("small", { text: `${b.due.length} due today and ${b.overdue.length} overdue. ${b.overdue.length ? "Clear overdue reviews before adding heavy new material." : "You can safely continue the curriculum."}` }))
    );
    root.append(card("Operational Insights", insights));
    const activity = el("div", { class: "activity-grid" });
    const byDate = /* @__PURE__ */ new Map();
    state.studyLogs.forEach((x) => {
      const d = (x.date || "").slice(0, 10);
      byDate.set(d, (byDate.get(d) || 0) + (+x.minutes || 0));
    });
    for (let i = 44; i >= 0; i--) {
      const d = new Date(Date.now() - i * 864e5).toISOString().slice(0, 10), mins = byDate.get(d) || 0, level = mins >= 120 ? 4 : mins >= 60 ? 3 : mins >= 25 ? 2 : mins > 0 ? 1 : 0;
      activity.append(el("div", { class: `activity-cell ${level ? "l" + level : ""}`, title: `${d}: ${mins} min` }));
    }
    root.append(card("45-Day Activity Map", activity));
    const charts = el("div", { class: "grid two" }), c1 = el("canvas", { class: "chart" }), c2 = el("canvas", { class: "chart" }), c3 = el("canvas", { class: "chart" }), c4 = el("canvas", { class: "chart" });
    charts.append(card("Curriculum Progress by Stage", c1), card("30-Day Study Minutes", c2), card("Weak-Topic Distribution", c3), card("Theory vs Practical Work", c4));
    root.append(charts);
    requestAnimationFrame(() => {
      barChart(c1, stageCompletion(state, curriculum()));
      lineChart(c2, last30Study(state.studyLogs));
      const wd = weak.slice(0, 8).map((x) => ({ label: x.topic, value: x.score }));
      barChart(c3, wd, { max: Math.max(100, ...wd.map((x) => x.value), 100) });
      const theory = state.studyLogs.filter((x) => x.mode === "Theory").reduce((s, x) => s + (+x.minutes || 0), 0);
      const practical = state.studyLogs.filter((x) => x.mode !== "Theory").reduce((s, x) => s + (+x.minutes || 0), 0);
      donutChart(c4, [{ label: "Theory", value: theory }, { label: "Practical", value: practical }]);
    });
    const achievements = [
      ["First Evidence", state.studyLogs.some((x) => x.evidence), "Save practical evidence"],
      ["7-Day Streak", m.longestStreak >= 7, "Study seven consecutive days"],
      ["Lab Operator", m.labsDone >= 1, "Complete an integration lab"],
      ["Interview Ready", m.interviewReadiness >= 75, "Reach 75% interview readiness"]
    ];
    root.append(card("Milestones", el("div", { class: "achievement-grid" }, ...achievements.map((x) => el("div", { class: `achievement ${x[1] ? "" : "locked"}` }, el("strong", { text: x[1] ? `Unlocked \xB7 ${x[0]}` : x[0] }), el("small", { text: x[2] }))))));
    return root;
  }
  async function todayPage() {
    const t = nextTopic(curriculum(), state.progress), pm = new Map(state.progress.map((x) => [x.id, x])), rev = buckets(state.reviews);
    const root = el("div", { class: "section-stack" });
    if (!t) return empty("No eligible topic. Resolve reviews or use administrator override in Learning Path.");
    const prereqs = (t.prerequisites || []).map((id) => curriculum().find((x) => x.id === id)?.topic).filter(Boolean);
    const focus = el("div", { class: "grid two" }, card("Primary Topic", el("div", {}, el("h2", { text: t.topic }), el("p", { text: t.learn }), el("div", { class: "callout", text: `Why next: it is the first non-mastered topic whose prerequisite chain is currently eligible.` }))), card("Execution Contract", el("div", { class: "list" }, el("div", { class: "list-item" }, el("strong", { text: "Prerequisites" }), el("small", { text: prereqs.join(", ") || "None" })), el("div", { class: "list-item" }, el("strong", { text: "Quick practice" }), el("small", { text: t.practice })), el("div", { class: "list-item" }, el("strong", { text: "Required evidence" }), el("small", { text: t.mastery })), el("div", { class: "list-item" }, el("strong", { text: "Interview question" }), el("small", { text: pickQuestion(t).question })))));
    root.append(focus);
    const timerCard = el("div", {}, el("div", { id: "timerDisplay", class: "timer", text: fmtTime(timer.seconds) }), el("div", { class: "toolbar" }, el("button", { id: "startTimer", class: "btn primary", text: timer.running ? "Pause" : "Start Session" }), el("button", { id: "resumeTimer", class: "btn", text: "Resume" }), el("button", { id: "completeSession", class: "btn", text: "Complete Session" })), el("label", {}, "Session evidence or completion note", el("textarea", { id: "sessionEvidence", placeholder: "What did you produce, prove, configure, capture or explain?" })), el("label", {}, "Distraction parking lot", el("textarea", { id: "parkingText", placeholder: "Park unrelated thoughts here without switching tasks." })));
    root.append(card("Focus Session", timerCard));
    root.append(card("Reviews Due Today", rev.due.length ? el("div", { class: "list" }, ...rev.due.map((r) => reviewItem(r))) : empty("No reviews due today.")));
    const todayKey = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    const savedTasks = state.dailyTasks.find((x) => x.date === todayKey) || { date: todayKey, items: [
      { id: "learn", text: `Learn: ${t.topic}`, done: false },
      { id: "practice", text: `Quick practice: ${t.practice}`, done: false },
      { id: "evidence", text: `Produce evidence: ${t.mastery}`, done: false },
      { id: "review", text: `Clear ${rev.due.length + rev.overdue.length} due/overdue review item(s)`, done: false },
      { id: "interview", text: `Explain aloud: ${pickQuestion(t).question}`, done: false }
    ] };
    const taskList = el("div", { class: "task-list" });
    for (const item of savedTasks.items) {
      const cb2 = el("input", { type: "checkbox" });
      cb2.checked = !!item.done;
      cb2.onchange = async () => {
        item.done = cb2.checked;
        await put("dailyTasks", savedTasks);
        setSaved("Saved");
      };
      taskList.append(el("label", { class: "task-row" }, cb2, el("span", { text: item.text })));
    }
    root.insertBefore(card("Today's Execution Checklist", taskList), root.firstChild.nextSibling);
    requestAnimationFrame(() => bindTimer(t));
    return root;
  }
  function pickQuestion(t) {
    const text = (t.topic + " " + t.stage).toLowerCase();
    const map = [["ospf", "OSPF"], ["dns", "DNS"], ["tcp", "TCP/IP"], ["tls", "TLS/PKI"], ["firewall", "Firewalls"], ["vpn", "VPN"], ["switch", "Switching"], ["routing", "Routing"]];
    const cat = map.find(([k]) => text.includes(k))?.[1] || "Networking fundamentals";
    return questions.find((q) => q.category === cat) || questions[0];
  }
  function fmtTime(s) {
    return [Math.floor(s / 3600), Math.floor(s % 3600 / 60), s % 60].map((x) => String(x).padStart(2, "0")).join(":");
  }
  function bindTimer(topic) {
    const display = $("#timerDisplay"), start = $("#startTimer"), resume = $("#resumeTimer");
    const tick = () => {
      timer.seconds++;
      display.textContent = fmtTime(timer.seconds);
    };
    start.onclick = () => {
      document.body.classList.add("focus-mode");
      if (timer.running) {
        clearInterval(timer.id);
        timer.running = false;
        start.textContent = "Resume";
      } else {
        timer.running = true;
        timer.start ?? (timer.start = (/* @__PURE__ */ new Date()).toISOString());
        timer.id = setInterval(tick, 1e3);
        start.textContent = "Pause";
      }
    };
    resume.onclick = () => {
      document.body.classList.add("focus-mode");
      if (!timer.running) {
        timer.running = true;
        timer.id = setInterval(tick, 1e3);
        start.textContent = "Pause";
      }
    };
    $("#completeSession").onclick = async () => {
      const evidence = $("#sessionEvidence").value.trim();
      if (!evidence) return toast("Evidence or a completion note is required.");
      clearInterval(timer.id);
      timer.running = false;
      const minutes = Math.max(1, Math.round(timer.seconds / 60));
      await put("studyLogs", { date: (/* @__PURE__ */ new Date()).toISOString(), stage: topic.stage, topic: topic.topic, topicId: topic.id, minutes, mode: "Quick Practice", learned: evidence, evidence, problem: "", nextAction: "", confidence: 3 });
      const park = $("#parkingText").value.trim();
      if (park) await put("parking", { date: (/* @__PURE__ */ new Date()).toISOString(), text: park, resolved: false });
      document.body.classList.remove("focus-mode");
      timer = { seconds: 0, running: false, id: null, start: null };
      toast("Session saved with evidence.");
      await refresh();
    };
  }
  async function learningPage() {
    const pm = new Map(state.progress.map((p) => [p.id, p])), root = el("div", { class: "section-stack" }), dirty = /* @__PURE__ */ new Map();
    const search = el("input", { placeholder: "Search topics, stages or skills\u2026", "aria-label": "Search learning path" });
    let activeFilter = "All";
    const filterBar = el("div", { class: "status-filter-bar" });
    const filters = ["All", "Not Started", "Learning", "Quick Practice", "Review", "Completed", "Mastered"];
    const body = el("div");
    const saveBtn = el("button", { class: "btn primary", text: "Save Changes", disabled: "disabled" });
    const discardBtn = el("button", { class: "btn", text: "Discard Draft", disabled: "disabled" });
    const dirtyText = el("span", { class: "autosave-pill", text: "All changes saved" });
    const next = nextTopic(curriculum(), state.progress);
    const recommend = el(
      "div",
      { class: "recommend-banner" },
      el("div", {}, el("span", { class: "badge", text: "NEXT RECOMMENDATION" }), el("strong", { text: next ? next.topic : "No eligible next topic" }), el("small", { text: next ? `${next.stage} \xB7 ${next.learn}` : "Resolve prerequisites or review requirements." })),
      el("div", { class: "toolbar" }, el("button", { class: "btn primary", text: "Study Next Topic", onClick: () => navigate("today") }), el("button", { class: "btn", text: "Learning Intelligence", onClick: () => navigate("intelligence") }))
    );
    const markDirty = (id, patch) => {
      dirty.set(id, { ...dirty.get(id) || {}, ...patch });
      saveBtn.disabled = false;
      saveBtn.removeAttribute("disabled");
      discardBtn.disabled = false;
      discardBtn.removeAttribute("disabled");
      dirtyText.textContent = `Draft \xB7 ${dirty.size} topic(s) changed`;
    };
    const makeFilterButtons = () => {
      filterBar.replaceChildren();
      for (const f of filters) {
        const b = el("button", { class: `filter-btn ${activeFilter === f ? "active" : ""}`, text: f, onClick: () => {
          activeFilter = f;
          makeFilterButtons();
          draw2();
        } });
        filterBar.append(b);
      }
    };
    makeFilterButtons();
    const saveChanges = async () => {
      if (!dirty.size) return;
      saveBtn.disabled = true;
      saveBtn.textContent = "Saving\u2026";
      try {
        for (const [id, patch] of dirty) {
          const p = pm.get(id);
          Object.assign(p, patch);
          if (p.status === "Completed" && !p.completedDate) {
            p.completedDate = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
            await scheduleFirst(id);
          }
          if (p.status === "Mastered" && !(p.masteryPassed && +p.confidence >= 4 && (p.reviewCount || 0) >= 1)) {
            p.status = "Completed";
            toast("Mastered requires mastery check, confidence \u22654 and at least one completed review.");
          }
          await put("progress", p);
        }
        dirty.clear();
        setSaved("Saved");
        toast("Learning Path updated.");
        await refresh();
      } catch (err) {
        console.error(err);
        toast(`Save failed: ${err.message}`);
        saveBtn.disabled = false;
        saveBtn.textContent = "Save Changes";
      }
    };
    saveBtn.onclick = saveChanges;
    discardBtn.onclick = () => {
      if (!dirty.size) return;
      if (confirm("Discard all unsaved Learning Path changes?")) {
        dirty.clear();
        refresh();
      }
    };
    const openEditor = (t) => {
      const p = pm.get(t.id), draft = { ...p, ...dirty.get(t.id) || {} };
      const statuses = ["Not Started", "Learning", "Quick Practice", "Review", "Completed", "Mastered"];
      const statusButtons = el("div", { class: "choice-grid" });
      let selectedStatus = draft.status || "Not Started";
      const redrawStatus = () => {
        [...statusButtons.children].forEach((b) => b.classList.toggle("active", b.dataset.value === selectedStatus));
      };
      statuses.forEach((x) => {
        const b = el("button", { class: "choice-btn", text: x, type: "button" });
        b.dataset.value = x;
        b.onclick = () => {
          selectedStatus = x;
          redrawStatus();
        };
        statusButtons.append(b);
      });
      redrawStatus();
      const confButtons = el("div", { class: "confidence-buttons" });
      let selectedConfidence = +(draft.confidence || 1);
      const redrawConf = () => {
        [...confButtons.children].forEach((b) => b.classList.toggle("active", +b.dataset.value === selectedConfidence));
      };
      [1, 2, 3, 4, 5].forEach((x) => {
        const b = el("button", { class: "confidence-btn", text: String(x), type: "button" });
        b.dataset.value = String(x);
        b.onclick = () => {
          selectedConfidence = x;
          redrawConf();
        };
        confButtons.append(b);
      });
      redrawConf();
      const mastery = el("input", { type: "checkbox" });
      mastery.checked = !!draft.masteryPassed;
      const evidence = el("textarea");
      evidence.value = draft.evidence || "";
      evidence.placeholder = "PCAP name, configuration file, lab result, ticket, diagram or note";
      const notes = el("textarea");
      notes.value = draft.notes || "";
      notes.placeholder = "What you understood, mistakes, production lessons and follow-up questions";
      const planned = input("date");
      planned.value = draft.plannedDate || "";
      const editor = el(
        "div",
        { class: "topic-editor" },
        el("div", { class: "editor-summary" }, el("span", { class: "badge", text: t.stage }), el("h3", { text: t.topic }), el("p", { text: t.learn }), el("p", {}, el("strong", { text: "Quick practice: " }), t.practice || "\u2014"), el("p", {}, el("strong", { text: "Mastery check: " }), t.mastery || "\u2014")),
        el("label", {}, "Status", statusButtons),
        el("label", {}, "Confidence", confButtons),
        el("div", { class: "form-grid" }, el("label", {}, "Planned date", planned), el("label", { class: "mastery-toggle" }, mastery, " Mastery check passed")),
        el("label", {}, "Evidence", evidence),
        el("label", {}, "Notes", notes)
      );
      modal(`Edit Topic \xB7 ${t.topic}`, editor, [
        { label: "Apply to Draft", kind: "primary", run: async (back) => {
          markDirty(t.id, { status: selectedStatus, confidence: selectedConfidence, masteryPassed: mastery.checked, evidence: evidence.value, notes: notes.value, plannedDate: planned.value });
          back.remove();
          draw2();
          toast("Topic changes added to draft.");
        } },
        { label: "Save Now", run: async (back) => {
          markDirty(t.id, { status: selectedStatus, confidence: selectedConfidence, masteryPassed: mastery.checked, evidence: evidence.value, notes: notes.value, plannedDate: planned.value });
          back.remove();
          await saveChanges();
        } }
      ]);
    };
    const toolbar = el(
      "div",
      { class: "learning-control-panel" },
      el("div", { class: "learning-search" }, search),
      filterBar,
      el("div", { class: "save-strip" }, dirtyText, discardBtn, saveBtn)
    );
    root.append(recommend, toolbar, body);
    const draw2 = () => {
      const q = search.value.toLowerCase();
      const items = curriculum().filter((t) => (activeFilter === "All" || (dirty.get(t.id)?.status || pm.get(t.id)?.status) === activeFilter) && `${t.stage} ${t.topic} ${t.learn}`.toLowerCase().includes(q));
      if (!items.length) {
        body.replaceChildren(empty("No topics match the current search and status filter."));
        return;
      }
      const table = el("table", { class: "learning-table" });
      table.append(el("thead", {}, el("tr", {}, ...["Stage / Topic", "Prerequisites", "Status", "Confidence", "Mastery", "Review", "Actions"].map((h) => el("th", { text: h })))));
      const tb = el("tbody");
      for (const t of items) {
        const p = { ...pm.get(t.id), ...dirty.get(t.id) || {} }, miss = missingPrereqs(t, pm);
        const statusPill = el("span", { class: `status-pill status-${String(p.status || "Not Started").toLowerCase().replaceAll(" ", "-")}`, text: p.status || "Not Started" });
        const conf = el("div", { class: "confidence-meter" }, ...[1, 2, 3, 4, 5].map((n) => el("span", { class: n <= +(p.confidence || 1) ? "filled" : "" })));
        const actions = el(
          "div",
          { class: "row-actions" },
          el("button", { class: "btn small primary", text: "Edit", onClick: () => openEditor(t) }),
          el("button", { class: "btn small", text: "Study", onClick: () => navigate("today") }),
          el("button", { class: "btn small", text: "More", onClick: () => modal(t.topic, el("div", { class: "section-stack" }, el("p", {}, el("strong", { text: "What to learn: " }), t.learn), el("p", {}, el("strong", { text: "Practice: " }), t.practice || "\u2014"), el("p", {}, el("strong", { text: "Mastery: " }), t.mastery || "\u2014"), el("p", {}, el("strong", { text: "Evidence: " }), p.evidence || "None yet"), el("p", {}, el("strong", { text: "Notes: " }), p.notes || "None yet"))) })
        );
        tb.append(el(
          "tr",
          {},
          el("td", {}, el("span", { class: "stage-mini", text: t.stage }), el("strong", { text: t.topic }), el("small", { text: t.learn })),
          el("td", { text: miss.length ? miss.map((id) => curriculum().find((x) => x.id === id)?.topic).filter(Boolean).join(", ") : "Eligible" }),
          el("td", {}, statusPill),
          el("td", {}, conf),
          el("td", {}, el("span", { class: `mastery-badge ${p.masteryPassed ? "passed" : ""}`, text: p.masteryPassed ? "Passed" : "Pending" })),
          el("td", { text: p.nextReviewDate || "\u2014" }),
          el("td", {}, actions)
        ));
      }
      table.append(tb);
      body.replaceChildren(el("div", { class: "table-wrap managed-table" }, table));
    };
    search.oninput = draw2;
    draw2();
    return root;
  }
  function reviewItem(r) {
    const t = curriculum().find((x) => x.id === r.topicId);
    const row = el("div", { class: "list-item" }, el("strong", { text: t?.topic || `Topic ${r.topicId}` }), el("small", { text: `Due ${r.dueDate} \xB7 Review ${r.round}` }), el("div", { class: "toolbar" }));
    for (const result of ["Forgot", "Weak", "Partial", "Strong"]) row.lastChild.append(el("button", { class: "btn", text: result, onClick: async () => {
      await recordReview(r, result);
      const p = state.progress.find((x) => x.id === r.topicId);
      p.reviewCount = (p.reviewCount || 0) + 1;
      if (result === "Strong" && p.status === "Completed" && p.confidence >= 4 && p.masteryPassed) p.status = "Mastered";
      else if (["Forgot", "Weak"].includes(result)) p.status = "Review";
      await put("progress", p);
      toast("Review recorded.");
      await refresh();
    } }));
    return row;
  }
  async function reviewPage() {
    const b = buckets(state.reviews), root = el("div", { class: "grid three" });
    for (const [name, arr] of [["Overdue", b.overdue], ["Due Today", b.due], ["Upcoming", b.upcoming.slice(0, 15)]]) root.append(card(name, arr.length ? el("div", { class: "list" }, ...arr.map(reviewItem)) : empty(`No ${name.toLowerCase()} reviews.`)));
    return root;
  }
  async function labsPage() {
    const names = ["Enterprise Campus Build", "OSPF Production Lab", "Firewall Segmentation", "Infrastructure Services Incident", "NAT Published Service", "HTTPS Failure Chain", "VPN Up / No Traffic", "Timed Production Outage"];
    const root = el("div", { class: "grid two" });
    for (let i = 0; i < names.length; i++) {
      const l = state.labs.find((x) => x.id === i + 1) || { id: i + 1, status: "Not Started", evidence: "", rca: "" }, sel = el("select", {}, ...["Not Started", "Building", "Fault Injection", "Troubleshooting", "Completed"].map((x) => el("option", { value: x, text: x, selected: l.status === x ? "selected" : null }))), ev = el("textarea", { placeholder: "Evidence: configs, PCAP, logs, diagram\u2026" }), rca = el("textarea", { placeholder: "RCA: timeline, trigger, root cause, fix, prevention\u2026" });
      ev.value = l.evidence || "";
      rca.value = l.rca || "";
      const save = async () => {
        l.status = sel.value;
        l.evidence = ev.value;
        l.rca = rca.value;
        await put("labs", l);
        setSaved("Saving\u2026");
      };
      sel.onchange = save;
      ev.onchange = save;
      rca.onchange = save;
      root.append(card(names[i], el("div", { class: "section-stack" }, sel, ev, rca)));
    }
    return root;
  }
  async function simulatorPage() {
    const root = el("div", { class: "section-stack" }), sel = el("select", {}, ...scenarios.map((s) => el("option", { value: s.id, text: s.name }))), body = el("div");
    root.append(el("div", { class: "toolbar" }, sel), body);
    const draw2 = () => {
      const s = scenarios.find((x) => x.id == sel.value), saved = state.scenarios.find((x) => x.scenarioId === s.id) || {};
      const evidence = el("div", { class: "list" }, ...s.evidence.map((x) => el("div", { class: "list-item", text: x })));
      const fields = ["Define symptom", "Define scope", "Identify dependencies", "Form hypotheses", "Select tests", "Record evidence", "Identify root cause", "Propose fix", "Validate recovery", "Write RCA"];
      const flow = el("div", { class: "scenario-flow" });
      fields.forEach((f, i) => {
        const ta = el("textarea", { placeholder: f });
        ta.value = saved.answers?.[i] || "";
        flow.append(el("label", { class: "scenario-step" }, f, ta));
      });
      const reveal = el("button", { class: "btn", text: "Reveal Root Cause", onClick: () => modal("Hidden Root Cause", el("div", { class: "callout warn", text: s.rootCause })) });
      const save = el("button", { class: "btn primary", text: "Save Investigation", onClick: async () => {
        const answers = [...flow.querySelectorAll("textarea")].map((x) => x.value);
        await put("scenarios", { ...saved.id ? { id: saved.id } : {}, scenarioId: s.id, date: (/* @__PURE__ */ new Date()).toISOString(), answers, mistakes: answers.filter((x) => !x.trim()).length });
        toast("Investigation saved.");
        await refresh();
      } });
      body.replaceChildren(el("div", { class: "grid two" }, card("Incident Context", el("div", {}, el("h3", { text: s.name }), el("p", { text: s.complaint }), el("div", { class: "callout", text: s.symptoms }), el("h3", { text: "Available Evidence" }), evidence, reveal)), card("Investigation Workflow", el("div", {}, flow, el("div", { class: "toolbar" }, save)))));
    };
    sel.onchange = draw2;
    draw2();
    return root;
  }
  async function studyPage() {
    const root = el("div", { class: "section-stack" }), form = el("form", { class: "card form-grid" });
    const fields = { date: input("datetime-local"), stage: input("text"), topic: input("text"), minutes: input("number"), mode: select(["Theory", "Quick Practice", "Review", "Troubleshooting", "Interview Drill", "Integration Lab"]), learned: textarea(), evidence: textarea(), problem: textarea(), nextAction: textarea(), confidence: select(["1", "2", "3", "4", "5"]) };
    fields.date.value = (/* @__PURE__ */ new Date()).toISOString().slice(0, 16);
    for (const [k, v] of Object.entries(fields)) form.append(el("label", {}, labelize(k), v));
    form.append(el("button", { class: "btn primary", type: "submit", text: "Save Study Session" }));
    form.onsubmit = async (e) => {
      e.preventDefault();
      const o = {};
      for (const [k, v] of Object.entries(fields)) o[k] = v.value;
      if (!o.topic || !o.minutes) return toast("Topic and minutes are required.");
      o.minutes = +o.minutes;
      o.confidence = +o.confidence;
      await put("studyLogs", o);
      toast("Study session saved.");
      await refresh();
    };
    const list = state.studyLogs.length ? tableFrom(state.studyLogs.slice().reverse().slice(0, 50), ["date", "topic", "minutes", "mode", "evidence", "nextAction"]) : empty("No study sessions yet.");
    root.append(form, card("Recent Sessions", list));
    return root;
  }
  async function habitsPage() {
    const root = el("div", { class: "section-stack" }), names = ["Sleep Target", "Gym / Exercise", "Walk / Movement", "Main Study Session", "Practical Lab", "Active Recall / Revision", "Communication Practice", "Distraction Control"], today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), h = state.habits.find((x) => x.date === today) || { date: today, values: {} };
    const form = el("form", { class: "card form-grid" });
    for (const n of names) {
      const s = select(["", "Yes", "Partial", "No", "N/A"]);
      s.value = h.values[n] || "";
      form.append(el("label", {}, n, s));
      s.onchange = () => h.values[n] = s.value;
    }
    form.append(el("label", {}, "Notes", textarea(h.notes || "")), el("button", { class: "btn primary", type: "submit", text: "Save Today" }));
    form.onsubmit = async (e) => {
      e.preventDefault();
      const vals = Object.values(h.values).filter((x) => x && x !== "N/A"), score = vals.length ? vals.reduce((a, x) => a + (x === "Yes" ? 1 : x === "Partial" ? 0.5 : 0), 0) / vals.length : 0;
      h.score = score;
      h.notes = form.querySelector("textarea").value;
      await put("habits", h);
      toast("Habits saved.");
      await refresh();
    };
    root.append(form, card("Recent Habit Scores", state.habits.length ? tableFrom(state.habits.slice().sort((a, b) => b.date.localeCompare(a.date)).slice(0, 30), ["date", "score", "notes"]) : empty("No habit data yet.")));
    return root;
  }
  async function interviewPage() {
    const root = el("div", { class: "section-stack" }), controls = el("div", { class: "toolbar" }), body = el("div");
    const category = select(["All", ...new Set(questions.map((q) => q.category))]), random = el("button", { class: "btn primary", text: "Random Question" }), timed = el("button", { class: "btn", text: "Timed Answer Mode" });
    controls.append(category, random, timed);
    root.append(controls, body);
    let current = null, countdownId = null, mediaRecorder = null, chunks = [], recordingBlob = null, stream = null;
    const stopTracks = () => {
      stream?.getTracks().forEach((t) => t.stop());
      stream = null;
    };
    const show = (q) => {
      current = q;
      recordingBlob = null;
      const answer = textarea(), weak = textarea(), conf = select(["1", "2", "3", "4", "5"]), result = select(["Weak", "Acceptable", "Strong"]), next = input("date"), clock = el("div", { class: "timer", text: "02:00" });
      const recStatus = el("span", { class: "autosave-pill", text: "Recorder idle" });
      const audioPreview = el("audio", { controls: "controls", class: "recording-preview" });
      audioPreview.hidden = true;
      const recordBtn = el("button", { class: "btn", type: "button", text: "Record Audio" });
      const stopBtn = el("button", { class: "btn", type: "button", text: "Stop Recording", disabled: "disabled" });
      const saveRecording = el("button", { class: "btn", type: "button", text: "Save Recording Locally", disabled: "disabled" });
      const driveBtn = el("button", { class: "btn", type: "button", text: "Upload to Google Drive", disabled: "disabled" });
      recordBtn.onclick = async () => {
        try {
          stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          chunks = [];
          mediaRecorder = new MediaRecorder(stream);
          mediaRecorder.ondataavailable = (e) => {
            if (e.data.size) chunks.push(e.data);
          };
          mediaRecorder.onstop = () => {
            recordingBlob = new Blob(chunks, { type: mediaRecorder.mimeType || "audio/webm" });
            audioPreview.src = URL.createObjectURL(recordingBlob);
            audioPreview.hidden = false;
            saveRecording.disabled = false;
            driveBtn.disabled = false;
            recStatus.textContent = `Ready \xB7 ${(recordingBlob.size / 1024).toFixed(0)} KB`;
            stopTracks();
          };
          mediaRecorder.start();
          recordBtn.disabled = true;
          stopBtn.disabled = false;
          recStatus.textContent = "Recording\u2026";
        } catch (err) {
          toast(`Microphone unavailable: ${err.message}`);
        }
      };
      stopBtn.onclick = () => {
        if (mediaRecorder?.state === "recording") {
          mediaRecorder.stop();
          recordBtn.disabled = false;
          stopBtn.disabled = true;
        }
      };
      saveRecording.onclick = async () => {
        if (!recordingBlob) return;
        await put("recordings", { questionId: q.id, question: q.question, category: q.category, date: (/* @__PURE__ */ new Date()).toISOString(), mime: recordingBlob.type, blob: recordingBlob });
        toast("Recording saved in this browser.");
        await refresh();
      };
      driveBtn.onclick = async () => {
        if (!recordingBlob) return;
        try {
          const clientId = localStorage.getItem("tracka.googleClientId") || "";
          if (!driveConnected()) await connectDrive(clientId);
          const stamp = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-"), ext = recordingBlob.type.includes("ogg") ? "ogg" : "webm";
          const file = await uploadToDrive(recordingBlob, `TrackA-Interview-${q.id}-${stamp}.${ext}`, recordingBlob.type);
          toast(`Uploaded to Drive: ${file.name}`);
        } catch (err) {
          toast(err.message);
        }
      };
      const save = el("button", { class: "btn primary", text: "Save Interview Result", onClick: async () => {
        await put("interviews", { questionId: q.id, category: q.category, question: q.question, answer: answer.value, weakPoint: weak.value, confidence: +conf.value, result: result.value, nextReviewDate: next.value, date: (/* @__PURE__ */ new Date()).toISOString() });
        toast("Interview result saved.");
        await refresh();
      } });
      body.replaceChildren(card(q.category, el(
        "div",
        { class: "section-stack" },
        el("h2", { text: q.question }),
        clock,
        card("Audio Practice Recorder", el("div", { class: "section-stack" }, el("div", { class: "toolbar" }, recordBtn, stopBtn, saveRecording, driveBtn, recStatus), audioPreview, el("small", { text: "Recordings stay in IndexedDB unless you explicitly upload them. Google Drive upload requires your own OAuth Client ID configured in Settings." }))),
        el("label", {}, "Answer summary", answer),
        el("label", {}, "Weak point", weak),
        el("div", { class: "form-grid" }, el("label", {}, "Confidence", conf), el("label", {}, "Result", result), el("label", {}, "Next review", next)),
        save
      )));
      timed.onclick = () => {
        clearInterval(countdownId);
        let sec = 120;
        clock.textContent = fmtTime(sec);
        countdownId = setInterval(() => {
          sec--;
          clock.textContent = fmtTime(Math.max(0, sec));
          if (sec <= 0) clearInterval(countdownId);
        }, 1e3);
      };
    };
    random.onclick = () => {
      const pool = questions.filter((q) => category.value === "All" || q.category === category.value);
      show(pool[Math.floor(Math.random() * pool.length)]);
    };
    random.click();
    root.append(card("Saved Recordings", state.recordings.length ? tableFrom(state.recordings.slice().reverse().slice(0, 20).map((r) => ({ date: r.date, category: r.category, question: r.question, size: `${(r.blob?.size / 1024 || 0).toFixed(0)} KB` })), ["date", "category", "question", "size"]) : empty("No local interview recordings yet.")));
    root.append(card("Recent Practice", state.interviews.length ? tableFrom(state.interviews.slice().reverse().slice(0, 20), ["date", "category", "question", "confidence", "result", "weakPoint"]) : empty("No interview results yet.")));
    return root;
  }
  async function interviewStudioPage() {
    const root = el("div", { class: "section-stack" });
    const intro = el(
      "div",
      { class: "recommend-banner" },
      el("div", {}, el("strong", { text: "Interview Practice Studio" }), el("small", { text: "Record \u2192 transcribe \u2192 review \u2192 score \u2192 repeat. Audio and video stay in this browser unless you explicitly upload a file to Google Drive." })),
      el("button", { class: "btn", text: "Open Question Book", onClick: () => navigate("questionBook") })
    );
    root.append(intro);
    let stream = null, recorder = null, chunks = [], blob = null, mode = "video", recognition = null, liveTranscript = "";
    const questionSelect = el("select", { "aria-label": "Practice question" }, ...questions.map((q) => el("option", { value: String(q.id), text: `${q.category} \u2014 ${q.question}` })));
    const modeSelect = select(["Video + Audio", "Audio Only"]);
    const preview = el("video", { class: "studio-preview", controls: "controls", playsinline: "playsinline" });
    preview.muted = true;
    const playback = el("video", { class: "studio-preview", controls: "controls" });
    playback.hidden = true;
    const transcript = textarea();
    transcript.placeholder = "Transcript appears here when browser speech recognition is available. You can always edit or paste a transcript manually.";
    const status = el("span", { class: "autosave-pill", text: "Ready" });
    const startBtn = el("button", { class: "btn primary", type: "button", text: "Start Recording" });
    const stopBtn = el("button", { class: "btn", type: "button", text: "Stop", disabled: "disabled" });
    const saveBtn = el("button", { class: "btn", type: "button", text: "Save Practice", disabled: "disabled" });
    const driveBtn = el("button", { class: "btn", type: "button", text: "Upload Recording to Drive", disabled: "disabled" });
    const confidence = select(["1", "2", "3", "4", "5"]), result = select(["Weak", "Acceptable", "Strong"]);
    const selfReview = textarea();
    selfReview.placeholder = "What was unclear, too long, inaccurate, or poorly structured?";
    const improvement = textarea();
    improvement.placeholder = "One specific improvement for the next attempt";
    function stopStream() {
      stream?.getTracks().forEach((t) => t.stop());
      stream = null;
      preview.srcObject = null;
    }
    function stopSpeech() {
      try {
        recognition?.stop();
      } catch (e) {
      }
      recognition = null;
    }
    function startSpeech() {
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SR) {
        status.textContent = "Recording \xB7 transcription unavailable in this browser";
        return;
      }
      recognition = new SR();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";
      recognition.onresult = (e) => {
        let finalText = liveTranscript, interim = "";
        for (let i = e.resultIndex; i < e.results.length; i++) {
          const txt = e.results[i][0].transcript;
          if (e.results[i].isFinal) finalText += txt + " ";
          else interim += txt;
        }
        liveTranscript = finalText;
        transcript.value = (finalText + interim).trim();
      };
      recognition.onerror = (e) => {
        console.warn("Speech recognition:", e.error);
      };
      try {
        recognition.start();
      } catch (e) {
      }
    }
    startBtn.onclick = async () => {
      try {
        mode = modeSelect.value === "Audio Only" ? "audio" : "video";
        stream = await navigator.mediaDevices.getUserMedia(mode === "video" ? { video: true, audio: true } : { audio: true });
        if (mode === "video") {
          preview.srcObject = stream;
          preview.hidden = false;
          await preview.play();
        } else {
          preview.hidden = true;
        }
        chunks = [];
        blob = null;
        liveTranscript = "";
        transcript.value = "";
        const options = MediaRecorder.isTypeSupported("video/webm;codecs=vp8,opus") && mode === "video" ? { mimeType: "video/webm;codecs=vp8,opus" } : {};
        recorder = new MediaRecorder(stream, options);
        recorder.ondataavailable = (e) => {
          if (e.data.size) chunks.push(e.data);
        };
        recorder.onstop = () => {
          blob = new Blob(chunks, { type: recorder.mimeType || (mode === "video" ? "video/webm" : "audio/webm") });
          playback.src = URL.createObjectURL(blob);
          playback.hidden = false;
          playback.muted = false;
          saveBtn.disabled = false;
          driveBtn.disabled = false;
          status.textContent = `Ready to review \xB7 ${(blob.size / 1024 / 1024).toFixed(1)} MB`;
          stopStream();
          stopSpeech();
        };
        recorder.start(1e3);
        startSpeech();
        startBtn.disabled = true;
        stopBtn.disabled = false;
        status.textContent = "Recording\u2026";
      } catch (err) {
        stopStream();
        stopSpeech();
        toast(`Camera/microphone unavailable: ${err.message}`);
      }
    };
    stopBtn.onclick = () => {
      if (recorder?.state === "recording") {
        recorder.stop();
        startBtn.disabled = false;
        stopBtn.disabled = true;
      }
    };
    saveBtn.onclick = async () => {
      if (!blob) return;
      const q = questions.find((x) => String(x.id) === questionSelect.value);
      await put("recordings", { questionId: q?.id, question: q?.question || "", category: q?.category || "", date: (/* @__PURE__ */ new Date()).toISOString(), mime: blob.type, kind: mode, blob, transcript: transcript.value, selfReview: selfReview.value, improvement: improvement.value, confidence: +confidence.value, result: result.value });
      toast("Practice recording and review saved locally.");
      await refresh();
    };
    driveBtn.onclick = async () => {
      if (!blob) return;
      try {
        const cid = localStorage.getItem("tracka.googleClientId") || "";
        if (!driveConnected()) await connectDrive(cid);
        const ext = mode === "video" ? "webm" : "webm", stamp = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-");
        await uploadToDrive(blob, `TrackA-${mode}-practice-${stamp}.${ext}`, blob.type);
        toast("Recording uploaded to Google Drive.");
      } catch (err) {
        toast(err.message);
      }
    };
    const recorderPanel = el(
      "div",
      { class: "studio-grid" },
      el(
        "div",
        { class: "section-stack" },
        el("label", {}, "Practice question", questionSelect),
        el("label", {}, "Recording mode", modeSelect),
        el("div", { class: "toolbar" }, startBtn, stopBtn, status),
        preview,
        playback
      ),
      el(
        "div",
        { class: "section-stack" },
        el("label", {}, "Transcript", transcript),
        el("div", { class: "form-grid" }, el("label", {}, "Confidence", confidence), el("label", {}, "Result", result)),
        el("label", {}, "Self-review", selfReview),
        el("label", {}, "Next-attempt improvement", improvement),
        el("div", { class: "toolbar" }, saveBtn, driveBtn)
      )
    );
    root.append(card("Practice Recorder", recorderPanel));
    const framework = el(
      "div",
      { class: "grid three" },
      card("Technical Answer Framework", el("ol", { class: "framework-list" }, ...["Define the concept precisely", "Explain the mechanism or packet flow", "Give a production example", "State failure modes and symptoms", "Explain verification and troubleshooting"].map((x) => el("li", { text: x })))),
      card("Troubleshooting Answer Framework", el("ol", { class: "framework-list" }, ...["Clarify symptom and scope", "Check recent changes", "Map dependencies", "Form ranked hypotheses", "Test with evidence", "Fix and validate", "Document RCA and prevention"].map((x) => el("li", { text: x })))),
      card("Behavioral STAR Framework", el("ol", { class: "framework-list" }, ...["Situation: brief context", "Task: your responsibility", "Action: what you personally did", "Result: measurable outcome", "Learning: what changed afterward"].map((x) => el("li", { text: x }))))
    );
    root.append(framework);
    const saved = state.recordings.slice().sort((x, y) => (y.date || "").localeCompare(x.date || ""));
    const list = el("div", { class: "recording-library" });
    if (!saved.length) list.append(empty("No practice recordings yet. Record one above and save it."));
    for (const r of saved) {
      const media = r.kind === "video" ? el("video", { controls: "controls", class: "library-media" }) : el("audio", { controls: "controls", class: "library-audio" });
      if (r.blob instanceof Blob) media.src = URL.createObjectURL(r.blob);
      const remove = el("button", { class: "btn danger", text: "Delete", onClick: async () => {
        if (confirm("Delete this local practice recording?")) {
          await del("recordings", r.id);
          toast("Recording deleted.");
          await refresh();
        }
      } });
      list.append(el(
        "article",
        { class: "recording-card" },
        el("div", { class: "recording-meta" }, el("strong", { text: r.question || "Practice recording" }), el("small", { text: `${r.category || "General"} \xB7 ${new Date(r.date).toLocaleString()} \xB7 ${r.kind || "audio"} \xB7 ${r.result || "Unscored"} \xB7 Confidence ${r.confidence || "\u2014"}` })),
        media,
        r.transcript ? el("details", {}, el("summary", { text: "Transcript" }), el("p", { class: "transcript-text", text: r.transcript })) : el("span"),
        r.selfReview ? el("p", { text: `Self-review: ${r.selfReview}` }) : el("span"),
        r.improvement ? el("p", { text: `Next attempt: ${r.improvement}` }) : el("span"),
        remove
      ));
    }
    root.append(card("Practice Recording Library", list));
    root.append(card("Practice Routine", el(
      "div",
      { class: "daily-plan" },
      el("div", { class: "step" }, el("span", { class: "num", text: "ROUND 1" }), el("strong", { text: "Cold answer" }), el("p", { text: "Answer without notes. Measure clarity, structure and gaps." })),
      el("div", { class: "step" }, el("span", { class: "num", text: "ROUND 2" }), el("strong", { text: "Correct and compress" }), el("p", { text: "Fix technical errors and reduce unnecessary explanation." })),
      el("div", { class: "step" }, el("span", { class: "num", text: "ROUND 3" }), el("strong", { text: "Pressure retest" }), el("p", { text: "Record again under a timer and compare against the first attempt." }))
    )));
    return root;
  }
  async function questionBookPage() {
    const root = el("div", { class: "section-stack" }), savedMap = new Map(state.questionBook.map((x) => [String(x.questionId), x]));
    const search = el("input", { placeholder: "Search questions, categories or notes\u2026", "aria-label": "Search interview question book" });
    const category = select(["All", ...new Set(questions.map((q) => q.category))]);
    const favOnly = el("input", { type: "checkbox" }), body = el("div");
    root.append(el("div", { class: "toolbar" }, search, category, el("label", { class: "inline-check" }, favOnly, " Favorites only")), body);
    const draw2 = () => {
      const term = search.value.toLowerCase(), cat = category.value;
      const filtered = questions.filter((q) => {
        const s = savedMap.get(String(q.id)) || {};
        return (cat === "All" || q.category === cat) && (!favOnly.checked || s.favorite) && `${q.question} ${q.category} ${s.notes || ""}`.toLowerCase().includes(term);
      });
      const list = el("div", { class: "question-book-grid" });
      if (!filtered.length) list.append(empty("No questions match the current filters."));
      for (const q of filtered) {
        const existing = savedMap.get(String(q.id)) || { questionId: q.id, favorite: false, status: "Unseen", notes: "", answerOutline: "", nextReviewDate: "" };
        const fav = el("input", { type: "checkbox" });
        fav.checked = !!existing.favorite;
        const status = select(["Unseen", "Learning", "Needs Practice", "Ready"]);
        status.value = existing.status || "Unseen";
        const notes = textarea(existing.notes || "");
        notes.placeholder = "Weak points, facts to verify, interviewer follow-ups\u2026";
        const outline = textarea(existing.answerOutline || "");
        outline.placeholder = "Your concise answer structure";
        const review = input("date");
        review.value = existing.nextReviewDate || "";
        const save = el("button", { class: "btn primary", text: "Save Question", onClick: async () => {
          const item = { ...existing, questionId: q.id, question: q.question, category: q.category, favorite: fav.checked, status: status.value, notes: notes.value, answerOutline: outline.value, nextReviewDate: review.value, updatedAt: (/* @__PURE__ */ new Date()).toISOString() };
          const savedId = await put("questionBook", item);
          item.id = savedId;
          savedMap.set(String(q.id), item);
          toast("Question saved to book.");
          setSaved("Saved");
        } });
        const practice = el("button", { class: "btn", text: "Practice This", onClick: () => navigate("interviewStudio") });
        list.append(el(
          "article",
          { class: "question-card" },
          el("div", { class: "question-card-head" }, el("div", {}, el("span", { class: "badge", text: q.category }), el("h3", { text: q.question })), el("label", { class: "favorite-toggle" }, fav, " Favorite")),
          el("div", { class: "form-grid" }, el("label", {}, "Readiness", status), el("label", {}, "Next review", review)),
          el("label", {}, "Answer outline", outline),
          el("label", {}, "Notes and weak points", notes),
          el("div", { class: "toolbar" }, save, practice)
        ));
      }
      body.replaceChildren(list);
    };
    search.oninput = draw2;
    category.onchange = draw2;
    favOnly.onchange = draw2;
    draw2();
    const counts = { total: questions.length, fav: state.questionBook.filter((x) => x.favorite).length, ready: state.questionBook.filter((x) => x.status === "Ready").length, practice: state.questionBook.filter((x) => x.status === "Needs Practice").length };
    root.insertBefore(el("div", { class: "grid kpis" }, kpi("Question Bank", counts.total, "Built-in categorized questions"), kpi("Favorites", counts.fav, "Saved for fast access"), kpi("Ready", counts.ready, "Marked interview-ready"), kpi("Needs Practice", counts.practice, "Priority rehearsal queue")), root.firstChild);
    return root;
  }
  async function vaultPage() {
    const root = el("div", { class: "section-stack" }), search = input("search"), add = el("button", { class: "btn primary", text: "New Note" }), list = el("div", { class: "grid two" });
    root.append(el("div", { class: "toolbar" }, search, add), list);
    const draw2 = () => {
      const q = search.value.toLowerCase();
      const notes = state.notes.filter((n) => `${n.title} ${n.category} ${n.content} ${(n.tags || []).join(" ")}`.toLowerCase().includes(q));
      list.replaceChildren(...notes.map((n) => card(n.title, el("div", { class: "note-card" }, el("div", { class: "note-meta", text: `${n.category} \xB7 updated ${n.updated?.slice(0, 10) || ""}` }), el("p", { text: n.content }), el("div", { class: "pill-row" }, ...(n.tags || []).map((t) => el("span", { class: "pill", text: t }))), el("div", { class: "toolbar" }, el("button", { class: "btn", text: n.favorite ? "\u2605 Favorite" : "\u2606 Favorite", onClick: async () => {
        n.favorite = !n.favorite;
        await put("notes", n);
        await refresh();
      } }), el("button", { class: "btn danger", text: "Delete", onClick: async () => {
        if (confirm("Delete this note?")) {
          await del("notes", n.id);
          await refresh();
        }
      } }))))));
      if (!notes.length) list.append(empty("No notes match your search."));
    };
    search.oninput = draw2;
    add.onclick = () => noteModal();
    draw2();
    return root;
  }
  function noteModal() {
    const title = input(), category = select(["Networking commands", "Cisco commands", "Linux networking commands", "Windows networking commands", "PowerShell commands", "Wireshark filters", "Firewall troubleshooting", "DNS troubleshooting", "Routing troubleshooting", "OSPF troubleshooting", "TLS troubleshooting", "VPN troubleshooting", "Interview stories", "RCA examples", "Important lessons"]), content = textarea(), tags = input();
    modal("New Knowledge Note", el("div", { class: "form-grid" }, el("label", {}, "Title", title), el("label", {}, "Category", category), el("label", {}, "Content", content), el("label", {}, "Tags (comma separated)", tags)), [{ label: "Save Note", kind: "primary", run: async (back) => {
      if (!title.value.trim()) return toast("Title is required.");
      await put("notes", { title: title.value.trim(), category: category.value, content: content.value, tags: tags.value.split(",").map((x) => x.trim()).filter(Boolean), favorite: false, created: (/* @__PURE__ */ new Date()).toISOString(), updated: (/* @__PURE__ */ new Date()).toISOString() });
      back.remove();
      toast("Note saved.");
      await refresh();
    } }]);
  }
  async function analyticsPage() {
    const m = metrics(state, curriculum()), weak = weakness(state, curriculum()), root = el("div", { class: "section-stack" });
    root.append(el("div", { class: "grid kpis" }, kpi("Total Study Hours", m.studyHours.toFixed(1)), kpi("7-Day Study Time", `${m.study7.toFixed(1)}h`), kpi("30-Day Study Time", `${m.study30.toFixed(1)}h`), kpi("Review Completion", `${m.reviewRate.toFixed(0)}%`), kpi("Lab Completion", `${m.labRate.toFixed(0)}%`), kpi("Current Streak", `${m.streak}d`), kpi("Longest Streak", `${m.longestStreak}d`), kpi("Weak Topics", m.weakCount)));
    const c1 = el("canvas", { class: "chart" }), c2 = el("canvas", { class: "chart" });
    root.append(el("div", { class: "grid two" }, card("Stage Mastery", c1), card("Study Trend", c2)));
    root.append(card("Top 5 Weak Areas", el("div", { class: "list" }, ...weak.slice(0, 5).map((w) => el("div", { class: "list-item" }, el("strong", { text: w.topic }), el("small", { text: `Why: ${w.reasons.join(", ") || "insufficient practical reinforcement"}` }), el("p", { text: `Corrective action: review the mastery check, produce evidence, and answer one interview question without notes.` }))))));
    requestAnimationFrame(() => {
      barChart(c1, stageCompletion(state, curriculum()));
      lineChart(c2, last30Study(state.studyLogs));
    });
    return root;
  }
  async function weeklyPage() {
    const root = el("div", { class: "section-stack" }), m = metrics(state, curriculum()), weak = weakness(state, curriculum())[0], form = el("form", { class: "card form-grid" }), fields = { week: input("week"), biggestWin: textarea(), bottleneck: textarea(), repeatedDistraction: textarea(), correctiveAction: textarea(), nextPriority: textarea() };
    for (const [k, v] of Object.entries(fields)) form.append(el("label", {}, labelize(k), v));
    const summary = `Tracked ${m.study7.toFixed(1)} study hours in the last 7 days. ${m.mastered} topics are mastered, ${m.review} require review, and ${m.labsDone} integration labs are complete. Current weakest area: ${weak?.topic || "not enough data"}.`;
    form.append(el("div", { class: "callout", text: summary }), el("button", { class: "btn primary", type: "submit", text: "Save Weekly Review" }));
    form.onsubmit = async (e) => {
      e.preventDefault();
      const o = { date: (/* @__PURE__ */ new Date()).toISOString(), summary, metrics: m };
      for (const [k, v] of Object.entries(fields)) o[k] = v.value;
      await put("weeklyReviews", o);
      toast("Weekly review saved.");
      await refresh();
    };
    root.append(form, card("Previous Reviews", state.weeklyReviews.length ? tableFrom(state.weeklyReviews.slice().reverse(), ["week", "summary", "biggestWin", "bottleneck", "correctiveAction", "nextPriority"]) : empty("No weekly reviews yet.")));
    return root;
  }
  async function settingsPage() {
    const root = el("div", { class: "section-stack" }), diff = await diffDraft(), hist = await history();
    const commitBox = el("div", { class: "section-stack" }, el("div", { class: "callout", text: "Workflow: DRAFT \u2192 REVIEW \u2192 COMMIT \u2192 LOCKED SNAPSHOT. Client-side snapshots protect against accidental changes, not a malicious user with browser access." }), el("button", { class: "btn", text: "Review Changes", onClick: () => modal("Draft vs Last Commit", el("div", { class: "diff", text: diff.summary.join("\n") })) }), el("button", { class: "btn primary", text: "COMMIT FINAL CHANGES", onClick: () => passwordConfirmCommit() }));
    root.append(card("Final Commit System", commitBox));
    const historyList = hist.length ? el("div", { class: "list" }, ...hist.map((c) => el("div", { class: "list-item" }, el("strong", { text: new Date(c.timestamp).toLocaleString() }), el("small", { text: `${c.hash.slice(0, 20)}\u2026 \xB7 ${c.message}` }), el("div", { class: "toolbar" }, el("button", { class: "btn", text: "Export Snapshot", onClick: () => exportSnapshot(c.snapshotId) }))))) : empty("No commits yet.");
    root.append(card("Commit History", historyList));
    const backup = el("div", { class: "grid two" }, card("Export Encrypted Backup", el("div", { class: "section-stack" }, el("p", { text: "Encrypt all IndexedDB application data with a passphrase. The passphrase is never stored." }), el("button", { class: "btn primary", text: "Export Backup", onClick: () => backupExportModal() }))), card("Import Encrypted Backup", el("div", { class: "section-stack" }, el("p", { text: "Import replaces current local application data after confirmation." }), el("button", { class: "btn", text: "Import Backup", onClick: () => backupImportModal() }))));
    root.append(backup);
    const cid = input();
    cid.value = localStorage.getItem("tracka.googleClientId") || "";
    cid.placeholder = "1234567890-....apps.googleusercontent.com";
    const driveBox = el(
      "div",
      { class: "section-stack" },
      el("p", { text: "Optional: configure your own Google OAuth Web Client ID to upload interview recordings directly to your Google Drive. Add this GitHub Pages origin to the OAuth client\u2019s Authorized JavaScript origins." }),
      el("label", {}, "Google OAuth Client ID", cid),
      el(
        "div",
        { class: "toolbar" },
        el("button", { class: "btn primary", text: "Save Client ID", onClick: () => {
          localStorage.setItem("tracka.googleClientId", cid.value.trim());
          toast("Google OAuth Client ID saved locally.");
        } }),
        el("button", { class: "btn", text: "Connect Google Drive", onClick: async () => {
          try {
            await connectDrive(cid.value.trim());
            toast("Google Drive connected for this session.");
          } catch (e) {
            toast(e.message);
          }
        } })
      ),
      el("small", { text: "The OAuth access token is held in memory only. This static app requests drive.file scope, which limits access to files the app creates or opens." })
    );
    root.append(card("Google Drive Integration", driveBox));
    return root;
  }
  function passwordConfirmCommit() {
    const pass = input("password"), msg = input();
    msg.value = "Final changes";
    modal("Confirm Final Commit", el("div", { class: "section-stack" }, el("label", {}, "Portal password", pass), el("label", {}, "Commit message", msg), el("div", { class: "callout warn", text: "A local immutable-style snapshot and SHA-256 integrity hash will be created. Browser owners can still clear IndexedDB or alter client code." })), [{ label: "Commit Final Changes", kind: "primary", run: async (back) => {
      if (!await login(pass.value)) return toast("Incorrect portal password.");
      const c = await createCommit(msg.value || "Final changes");
      back.remove();
      $("#modeBadge").textContent = "COMMITTED";
      toast(`Committed ${c.hash.slice(0, 12)}\u2026`);
      await refresh();
    } }]);
  }
  function backupExportModal() {
    const p = input("password");
    modal("Export Encrypted Backup", el("label", {}, "Backup passphrase", p), [{ label: "Encrypt & Export", kind: "primary", run: async (back) => {
      if (p.value.length < 8) return toast("Use at least 8 characters.");
      await exportBackup(p.value);
      back.remove();
      toast("Encrypted backup exported.");
    } }]);
  }
  function backupImportModal() {
    const file = input("file"), p = input("password");
    file.accept = ".tracka,application/json";
    modal("Import Encrypted Backup", el("div", { class: "section-stack" }, el("label", {}, "Backup file", file), el("label", {}, "Backup passphrase", p)), [{ label: "Import & Replace Data", kind: "danger", run: async (back) => {
      if (!file.files[0]) return toast("Choose a backup file.");
      if (!confirm("Replace current local data with this backup?")) return;
      try {
        await importBackup(file.files[0], p.value);
        back.remove();
        toast("Backup restored.");
        await refresh();
      } catch (e) {
        toast("Import failed: wrong passphrase or damaged file.");
      }
    } }]);
  }
  function input(type = "text") {
    return el("input", { type });
  }
  function textarea(value = "") {
    const x = el("textarea");
    x.value = value;
    return x;
  }
  function select(opts) {
    return el("select", {}, ...opts.map((o) => el("option", { value: o, text: o })));
  }
  function labelize(s) {
    return s.replace(/([A-Z])/g, " $1").replace(/^./, (x) => x.toUpperCase());
  }
  function tableFrom(rows, cols) {
    const t = el("table"), head = el("tr", {}, ...cols.map((c) => el("th", { text: labelize(c) }))), body = el("tbody");
    for (const r of rows) body.append(el("tr", {}, ...cols.map((c) => el("td", { text: c === "score" ? `${Math.round((r[c] || 0) * 100)}%` : String(r[c] ?? "\u2014") }))));
    t.append(el("thead", {}, head), body);
    return el("div", { class: "table-wrap" }, t);
  }
  boot().catch((e) => {
    console.error(e);
    document.body.textContent = "Application failed to initialize. Open the browser console for details.";
  });
})();
