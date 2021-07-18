microIoT.microIoT_MQTT_Event(microIoT.TOPIC.topic_0, function (message) {
    Mode = message
    microIoT.microIoT_ledBlank()
    microIoT.microIoT_showUserText(0, "Mode: " + Mode)
})
let Mode = ""
microIoT.microIoT_initDisplay()
let wifi_name = "DGINCB_WT6F"
microIoT.microIoT_WIFI(wifi_name, "20210601")
microIoT.microIoT_MQTT(
    "vkW338gnR",
    "DkZq38gnRz",
    "DanDCZznR",
    microIoT.SERVERS.English
)
