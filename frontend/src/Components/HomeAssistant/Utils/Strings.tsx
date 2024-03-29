// Sourced from https://github.com/home-assistant/home-assistant-polymer/blob/master/translations/en.json
const data = {
  attribute: {
    weather: {
      humidity: "Humidity",
      visibility: "Visibility",
      wind_speed: "Wind speed",
    },
  },
  config_entry: {
    disabled_by: {
      config_entry: "Config Entry",
      integration: "Integration",
      user: "User",
    },
  },
  domain: {
    alarm_control_panel: "Alarm control panel",
    automation: "Automation",
    binary_sensor: "Binary sensor",
    calendar: "Calendar",
    camera: "Camera",
    climate: "Climate",
    configurator: "Configurator",
    conversation: "Conversation",
    cover: "Cover",
    device_tracker: "Device tracker",
    fan: "Fan",
    group: "Group",
    hassio: "Hass.io",
    history_graph: "History graph",
    homeassistant: "Home Assistant",
    image_processing: "Image processing",
    input_boolean: "Input boolean",
    input_datetime: "Input datetime",
    input_number: "Input number",
    input_select: "Input select",
    input_text: "Input text",
    light: "Light",
    lock: "Lock",
    lovelace: "Lovelace",
    mailbox: "Mailbox",
    media_player: "Media player",
    notify: "Notify",
    person: "Person",
    plant: "Plant",
    proximity: "Proximity",
    remote: "Remote",
    scene: "Scene",
    script: "Script",
    sensor: "Sensor",
    sun: "Sun",
    switch: "Switch",
    system_health: "System Health",
    updater: "Updater",
    vacuum: "Vacuum",
    weblink: "Weblink",
    zha: "ZHA",
    zwave: "Z-Wave",
  },
  groups: {
    "system-admin": "Administrators",
    "system-read-only": "Read-Only Users",
    "system-users": "Users",
  },
  panel: {
    calendar: "Calendar",
    config: "Configuration",
    "dev-info": "Info",
    developer_tools: "Developer Tools",
    history: "History",
    logbook: "Logbook",
    mailbox: "Mailbox",
    map: "Map",
    profile: "Profile",
    shopping_list: "Shopping list",
    states: "Overview",
  },
  state_attributes: {
    climate: {
      fan_mode: {
        auto: "Auto",
        off: "Off",
        on: "On",
      },
      hvac_action: {
        cooling: "Cooling",
        drying: "Drying",
        fan: "Fan",
        heating: "Heating",
        idle: "Idle",
        off: "Off",
      },
      preset_mode: {
        activity: "Activity",
        away: "Away",
        boost: "Boost",
        comfort: "Comfort",
        eco: "Eco",
        home: "Home",
        none: "None",
        sleep: "Sleep",
      },
    },
  },
  state_badge: {
    alarm_control_panel: {
      armed: "Armed",
      armed_away: "Armed",
      armed_custom_bypass: "Armed",
      armed_home: "Armed",
      armed_night: "Armed",
      arming: "Arming",
      disarmed: "Disarm",
      disarming: "Disarm",
      pending: "Pend",
      triggered: "Trig",
    },
    default: {
      entity_not_found: "Entity Not Found",
      error: "Error",
      unavailable: "Unavai",
      unknown: "Unk",
    },
    device_tracker: {
      home: "Home",
      not_home: "Away",
    },
    person: {
      home: "Home",
      not_home: "Away",
    },
  },
  state: {
    alarm_control_panel: {
      armed: "Armed",
      armed_away: "Armed away",
      armed_custom_bypass: "Armed custom bypass",
      armed_home: "Armed home",
      armed_night: "Armed night",
      arming: "Arming",
      disarmed: "Disarmed",
      disarming: "Disarming",
      pending: "Pending",
      triggered: "Triggered",
    },
    automation: {
      off: "Off",
      on: "On",
    },
    binary_sensor: {
      battery: {
        off: "Normal",
        on: "Low",
      },
      cold: {
        off: "Normal",
        on: "Cold",
      },
      connectivity: {
        off: "Disconnected",
        on: "Connected",
      },
      default: {
        off: "Off",
        on: "On",
      },
      door: {
        off: "Closed",
        on: "Open",
      },
      garage_door: {
        off: "Closed",
        on: "Open",
      },
      gas: {
        off: "Clear",
        on: "Detected",
      },
      heat: {
        off: "Normal",
        on: "Hot",
      },
      lock: {
        off: "Locked",
        on: "Unlocked",
      },
      moisture: {
        off: "Dry",
        on: "Wet",
      },
      motion: {
        off: "Clear",
        on: "Detected",
      },
      occupancy: {
        off: "Clear",
        on: "Detected",
      },
      opening: {
        off: "Closed",
        on: "Open",
      },
      presence: {
        off: "Away",
        on: "Home",
      },
      problem: {
        off: "OK",
        on: "Problem",
      },
      safety: {
        off: "Safe",
        on: "Unsafe",
      },
      smoke: {
        off: "Clear",
        on: "Detected",
      },
      sound: {
        off: "Clear",
        on: "Detected",
      },
      vibration: {
        off: "Clear",
        on: "Detected",
      },
      window: {
        off: "Closed",
        on: "Open",
      },
    },
    calendar: {
      off: "Off",
      on: "On",
    },
    camera: {
      idle: "Idle",
      recording: "Recording",
      streaming: "Streaming",
    },
    climate: {
      auto: "Auto",
      cool: "Cool",
      dry: "Dry",
      eco: "Eco",
      electric: "Electric",
      fan_only: "Fan only",
      gas: "Gas",
      heat: "Heat",
      heat_cool: "Heat/Cool",
      heat_pump: "Heat pump",
      high_demand: "High demand",
      idle: "Idle",
      manual: "Manual",
      off: "Off",
      on: "On",
      performance: "Performance",
    },
    configurator: {
      configure: "Configure",
      configured: "Configured",
    },
    cover: {
      closed: "Closed",
      closing: "Closing",
      open: "Open",
      opening: "Opening",
      stopped: "Stopped",
    },
    default: {
      off: "Off",
      on: "On",
      unavailable: "Unavailable",
      unknown: "Unknown",
    },
    device_tracker: {
      home: "Home",
      not_home: "Away",
    },
    fan: {
      off: "Off",
      on: "On",
    },
    group: {
      closed: "Closed",
      closing: "Closing",
      home: "Home",
      locked: "Locked",
      not_home: "Away",
      off: "Off",
      ok: "OK",
      on: "On",
      open: "Open",
      opening: "Opening",
      problem: "Problem",
      stopped: "Stopped",
      unlocked: "Unlocked",
    },
    input_boolean: {
      off: "Off",
      on: "On",
    },
    light: {
      off: "Off",
      on: "On",
    },
    lock: {
      locked: "Locked",
      unlocked: "Unlocked",
    },
    media_player: {
      idle: "Idle",
      off: "Off",
      on: "On",
      paused: "Paused",
      playing: "Playing",
      standby: "Standby",
    },
    person: {
      home: "Home",
      not_home: "Away",
    },
    plant: {
      ok: "OK",
      problem: "Problem",
    },
    remote: {
      off: "Off",
      on: "On",
    },
    scene: {
      scening: "Scening",
    },
    script: {
      off: "Off",
      on: "On",
    },
    sensor: {
      off: "Off",
      on: "On",
    },
    sun: {
      above_horizon: "Above horizon",
      below_horizon: "Below horizon",
    },
    switch: {
      off: "Off",
      on: "On",
    },
    timer: {
      active: "active",
      idle: "idle",
      paused: "paused",
    },
    vacuum: {
      cleaning: "Cleaning",
      docked: "Docked",
      error: "Error",
      idle: "Idle",
      off: "Off",
      on: "On",
      paused: "Paused",
      returning: "Returning to dock",
    },
    weather: {
      "clear-night": "Clear, night",
      cloudy: "Cloudy",
      exceptional: "Exceptional",
      fog: "Fog",
      hail: "Hail",
      lightning: "Lightning",
      "lightning-rainy": "Lightning, rainy",
      partlycloudy: "Partly cloudy",
      pouring: "Pouring",
      rainy: "Rainy",
      snowy: "Snowy",
      "snowy-rainy": "Snowy, rainy",
      sunny: "Sunny",
      windy: "Windy",
      "windy-variant": "Windy",
    },
    zwave: {
      default: {
        dead: "Dead",
        initializing: "Initializing",
        ready: "Ready",
        sleeping: "Sleeping",
      },
      query_stage: {
        dead: "Dead ({query_stage})",
        initializing: "Initializing ({query_stage})",
      },
    },
  },
  ui: {
    auth_store: {
      ask: "Do you want to save this login?",
      confirm: "Save login",
      decline: "No thanks",
    },
    card: {
      alarm_control_panel: {
        arm_away: "Arm away",
        arm_custom_bypass: "Custom bypass",
        arm_home: "Arm home",
        arm_night: "Arm night",
        armed_custom_bypass: "Custom bypass",
        clear_code: "Clear",
        code: "Code",
        disarm: "Disarm",
      },
      automation: {
        last_triggered: "Last triggered",
        trigger: "Execute",
      },
      camera: {
        not_available: "Image not available",
      },
      climate: {
        aux_heat: "Aux heat",
        away_mode: "Away mode",
        cooling: "{name} cooling",
        current_temperature: "{name} current temperature",
        currently: "Currently",
        fan_mode: "Fan mode",
        heating: "{name} heating",
        high: "high",
        low: "low",
        on_off: "On / off",
        operation: "Operation",
        preset_mode: "Preset",
        swing_mode: "Swing mode",
        target_humidity: "Target humidity",
        target_temperature: "Target temperature",
        target_temperature_entity: "{name} target temperature",
        target_temperature_mode: "{name} target temperature {mode}",
      },
      counter: {
        actions: {
          decrement: "decrement",
          increment: "increment",
          reset: "reset",
        },
      },
      cover: {
        position: "Position",
        tilt_position: "Tilt position",
      },
      fan: {
        direction: "Direction",
        forward: "Forward",
        oscillate: "Oscillate",
        reverse: "Reverse",
        speed: "Speed",
      },
      light: {
        brightness: "Brightness",
        color_temperature: "Color temperature",
        effect: "Effect",
        white_value: "White value",
      },
      lock: {
        code: "Code",
        lock: "Lock",
        unlock: "Unlock",
      },
      media_player: {
        sound_mode: "Sound mode",
        source: "Source",
        text_to_speak: "Text to speak",
      },
      persistent_notification: {
        dismiss: "Dismiss",
      },
      scene: {
        activate: "Activate",
      },
      script: {
        execute: "Execute",
      },
      service: {
        run: "Run",
      },
      timer: {
        actions: {
          cancel: "cancel",
          finish: "finish",
          pause: "pause",
          start: "start",
        },
      },
      vacuum: {
        actions: {
          resume_cleaning: "Resume cleaning",
          return_to_base: "Return to dock",
          start_cleaning: "Start cleaning",
          turn_off: "Turn off",
          turn_on: "Turn on",
        },
      },
      water_heater: {
        away_mode: "Away mode",
        currently: "Currently",
        on_off: "On / off",
        operation: "Operation",
        target_temperature: "Target temperature",
      },
      weather: {
        attributes: {
          air_pressure: "Air pressure",
          humidity: "Humidity",
          temperature: "Temperature",
          visibility: "Visibility",
          wind_speed: "Wind speed",
        },
        cardinal_direction: {
          e: "E",
          ene: "ENE",
          ese: "ESE",
          n: "N",
          ne: "NE",
          nne: "NNE",
          nnw: "NNW",
          nw: "NW",
          s: "S",
          se: "SE",
          sse: "SSE",
          ssw: "SSW",
          sw: "SW",
          w: "W",
          wnw: "WNW",
          wsw: "WSW",
        },
        forecast: "Forecast",
      },
    },
    common: {
      cancel: "Cancel",
      close: "Close",
      loading: "Loading",
      no: "No",
      save: "Save",
      successfully_saved: "Successfully saved",
      yes: "Yes",
    },
    components: {
      "area-picker": {
        add_dialog: {
          add: "Add",
          failed_create_area: "Failed to create area.",
          name: "Name",
          text: "Enter the name of the new area.",
          title: "Add new area",
        },
        add_new: "Add new area…",
        area: "Area",
        clear: "Clear",
        show_areas: "Show areas",
      },
      "device-picker": {
        clear: "Clear",
        device: "Device",
        show_devices: "Show devices",
        toggle: "Toggle",
      },
      entity: {
        "entity-picker": {
          clear: "Clear",
          entity: "Entity",
          show_entities: "Show entities",
        },
      },
      history_charts: {
        loading_history: "Loading state history...",
        no_history_found: "No state history found.",
      },
      "related-items": {
        area: "Area",
        automation: "Part of the following automations",
        device: "Device",
        entity: "Related entities",
        group: "Part of the following groups",
        integration: "Integration",
        no_related_found: "No related items found.",
        scene: "Part of the following scenes",
        script: "Part of the following scripts",
      },
      relative_time: {
        duration: {
          day: "{count} {count, plural,\n  one {day}\n  other {days}\n}",
          hour: "{count} {count, plural,\n  one {hour}\n  other {hours}\n}",
          minute:
            "{count} {count, plural,\n  one {minute}\n  other {minutes}\n}",
          second:
            "{count} {count, plural,\n  one {second}\n  other {seconds}\n}",
          week: "{count} {count, plural,\n  one {week}\n  other {weeks}\n}",
        },
        future: "In {time}",
        never: "Never",
        past: "{time} ago",
      },
      "service-picker": {
        service: "Service",
      },
    },
    dialogs: {
      config_entry_system_options: {
        enable_new_entities_description:
          "If disabled, newly discovered entities for {integration} will not be automatically added to IoTology.",
        enable_new_entities_label: "Enable newly added entities.",
        title: "System Options for {integration}",
        update: "Update",
      },
      confirmation: {
        cancel: "Cancel",
        ok: "OK",
        title: "Are you sure?",
      },
      domain_toggler: {
        title: "Toggle Domains",
      },
      entity_registry: {
        control: "Control",
        dismiss: "Dismiss",
        editor: {
          confirm_delete: "Are you sure you want to delete this entry?",
          delete: "DELETE",
          enabled_cause: "Disabled by {cause}.",
          enabled_description:
            "Disabled entities will not be added to IoTology.",
          enabled_label: "Enable entity",
          entity_id: "Entity ID",
          icon: "Icon Override",
          icon_error:
            "Icons should be in the format 'prefix:iconname', e.g. 'mdi:home'",
          name: "Name Override",
          note: "Note: this might not work yet with all integrations.",
          unavailable: "This entity is not currently available.",
          update: "UPDATE",
        },
        no_unique_id:
          "This entity does not have a unique ID, therefore it's settings can not be managed from the UI.",
        related: "Related",
        settings: "Settings",
      },
      generic: {
        cancel: "Cancel",
        close: "close",
        default_confirmation_title: "Are you sure?",
        ok: "OK",
      },
      helper_settings: {
        generic: {
          icon: "Icon",
          initial_value: "Initial value at start",
          initial_value_explain:
            "The value the element will have when IoTology starts. When left empty, the value will be restored to it's previous value.",
          name: "Name",
        },
        input_datetime: {
          has_date: "Date",
          has_time: "Time",
        },
        input_number: {
          box: "Input field",
          max: "Maximum value",
          min: "Minimum value",
          mode: "Display mode",
          slider: "Slider",
          step: "Step size of the slider",
          unit_of_measurement: "Unit of measurement",
        },
        input_select: {
          add: "Add",
          add_option: "Add option",
          no_options: "There are no options yet.",
          options: "Options",
        },
        input_text: {
          max: "Maximum lenght",
          min: "Minimum lenght",
          mode: "Display mode",
          password: "Password",
          pattern: "Regex pattern for client-side validation",
          text: "Text",
        },
        not_editable: "Not editable",
        not_editable_text:
          "This entity can't be changed from the UI because it is defined in configuration.yaml.",
        required_error_msg: "This field is required",
      },
      more_info_control: {
        dismiss: "Dismiss dialog",
        edit: "Edit entity",
        person: {
          create_zone: "Create zone from current location",
        },
        restored: {
          confirm_remove_text: "Are you sure you want to remove this entity?",
          confirm_remove_title: "Remove entity?",
          not_provided:
            "This entity is currently unavailable and is an orphan to a removed, changed or dysfunctional integration or device.",
          remove_action: "Remove entity",
          remove_intro:
            "If the entity is no longer in use, you can clean it up by removing it.",
        },
        script: {
          last_action: "Last Action",
          last_triggered: "Last Triggered",
        },
        settings: "Entity settings",
        sun: {
          elevation: "Elevation",
          rising: "Rising",
          setting: "Setting",
        },
        updater: {
          title: "Update Instructions",
        },
        vacuum: {
          clean_spot: "Clean spot",
          commands: "Vacuum cleaner commands:",
          fan_speed: "Fan speed",
          locate: "Locate",
          pause: "Pause",
          return_home: "Return home",
          start: "Start",
          start_pause: "Start/Pause",
          status: "Status",
          stop: "Stop",
        },
      },
      more_info_settings: {
        back: "Go back",
        entity_id: "Entity ID",
        name: "Name Override",
        save: "Save",
      },
      options_flow: {
        form: {
          header: "Options",
        },
        success: {
          description: "Options successfully saved.",
        },
      },
      voice_command: {
        did_not_hear: "IoTology did not hear anything",
        error: "Oops, an error has occurred",
        found: "I found the following for you:",
        how_can_i_help: "How can I help?",
        label: "Type a question and press 'Enter'",
        label_voice: "Type and press 'Enter' or tap the microphone to speak",
      },
      zha_device_info: {
        buttons: {
          add: "Add Devices",
          reconfigure: "Reconfigure Device",
          remove: "Remove Device",
        },
        confirmations: {
          remove: "Are you sure that you want to remove the device?",
        },
        last_seen: "Last Seen",
        manuf: "by {manufacturer}",
        no_area: "No Area",
        power_source: "Power Source",
        quirk: "Quirk",
        services: {
          reconfigure:
            "Reconfigure ZHA device (heal device). Use this if you are having issues with the device. If the device in question is a battery powered device please ensure it is awake and accepting commands when you use this service.",
          remove: "Remove a device from the Zigbee network.",
          updateDeviceName:
            "Set a custom name for this device in the device registry.",
        },
        unknown: "Unknown",
        zha_device_card: {
          area_picker_label: "Area",
          device_name_placeholder: "User given name",
          update_name_button: "Update Name",
        },
      },
    },
    duration: {
      day: "{count} {count, plural,\n  one {day}\n  other {days}\n}",
      hour: "{count} {count, plural,\n  one {hour}\n  other {hours}\n}",
      minute: "{count} {count, plural,\n  one {minute}\n  other {minutes}\n}",
      second: "{count} {count, plural,\n  one {second}\n  other {seconds}\n}",
      week: "{count} {count, plural,\n  one {week}\n  other {weeks}\n}",
    },
    "login-form": {
      log_in: "Log in",
      password: "Password",
      remember: "Remember",
    },
    notification_drawer: {
      click_to_configure: "Click button to configure {entity}",
      close: "Close",
      empty: "No Notifications",
      title: "Notifications",
    },
    notification_toast: {
      connection_lost: "Connection lost. Reconnecting…",
      entity_turned_off: "Turned off {entity}.",
      entity_turned_on: "Turned on {entity}.",
      service_call_failed: "Failed to call service {service}.",
      service_called: "Service {service} called.",
      triggered: "Triggered {name}",
    },
    panel: {
      config: {
        advanced_mode: {
          hint_enable: "Missing config options? Enable advanced mode on",
          link_profile_page: "your profile page",
        },
        areas: {
          caption: "Areas",
          create_area: "CREATE AREA",
          description: "Overview of all areas in your home.",
          editor: {
            create: "CREATE",
            default_name: "New Area",
            delete: "DELETE",
            update: "UPDATE",
          },
          no_areas: "Looks like you have no areas yet!",
          picker: {
            create_area: "CREATE AREA",
            header: "Areas",
            integrations_page: "Integrations page",
            introduction:
              "Areas are used to organize where devices are. This information will be used throughout IoTology to help you in organizing your interface, permissions and integrations with other systems.",
            introduction2:
              "To place devices in an area, use the link below to navigate to the integrations page and then click on a configured integration to get to the device cards.",
            no_areas: "Looks like you have no areas yet!",
          },
        },
        automation: {
          caption: "Automations",
          description: "Create and edit automations",
          editor: {
            actions: {
              add: "Add action",
              delete: "Delete",
              delete_confirm: "Sure you want to delete?",
              duplicate: "Duplicate",
              header: "Actions",
              introduction:
                "The actions are what IoTology will do when the automation is triggered.",
              learn_more: "Learn more about actions",
              name: "Action",
              type_select: "Action type",
              type: {
                condition: {
                  label: "Condition",
                },
                delay: {
                  delay: "Delay",
                  label: "Delay",
                },
                device_id: {
                  extra_fields: {
                    code: "Code",
                  },
                  label: "Device",
                },
                event: {
                  event: "Event:",
                  label: "Fire event",
                  service_data: "Service data",
                },
                scene: {
                  label: "Activate scene",
                },
                service: {
                  label: "Call service",
                  service_data: "Service data",
                },
                wait_template: {
                  label: "Wait",
                  timeout: "Timeout (optional)",
                  wait_template: "Wait Template",
                },
              },
              unsupported_action: "Unsupported action: {action}",
            },
            alias: "Name",
            conditions: {
              add: "Add condition",
              delete: "Delete",
              delete_confirm: "Sure you want to delete?",
              duplicate: "Duplicate",
              header: "Conditions",
              introduction:
                "Conditions are optional and will prevent further execution unless all conditions are satisfied.",
              learn_more: "Learn more about conditions",
              name: "Condition",
              type_select: "Condition type",
              type: {
                and: {
                  label: "And",
                },
                device: {
                  extra_fields: {
                    above: "Above",
                    below: "Below",
                    for: "Duration",
                  },
                  label: "Device",
                },
                numeric_state: {
                  above: "Above",
                  below: "Below",
                  label: "Numeric state",
                  value_template: "Value template (optional)",
                },
                or: {
                  label: "Or",
                },
                state: {
                  label: "State",
                  state: "State",
                },
                sun: {
                  after: "After:",
                  after_offset: "After offset (optional)",
                  before: "Before:",
                  before_offset: "Before offset (optional)",
                  label: "Sun",
                  sunrise: "Sunrise",
                  sunset: "Sunset",
                },
                template: {
                  label: "Template",
                  value_template: "Value template",
                },
                time: {
                  after: "After",
                  before: "Before",
                  label: "Time",
                },
                zone: {
                  entity: "Entity with location",
                  label: "Zone",
                  zone: "Zone",
                },
              },
              unsupported_condition: "Unsupported condition: {condition}",
            },
            default_name: "New Automation",
            description: {
              label: "Description",
              placeholder: "Optional description",
            },
            edit_ui: "Edit with UI",
            edit_yaml: "Edit as YAML",
            enable_disable: "Enable/Disable automation",
            introduction: "Use automations to bring your home alive.",
            load_error_not_editable:
              "Only automations in automations.yaml are editable.",
            load_error_unknown: "Error loading automation ({err_no}).",
            save: "Save",
            triggers: {
              add: "Add trigger",
              delete: "Delete",
              delete_confirm: "Sure you want to delete?",
              duplicate: "Duplicate",
              header: "Triggers",
              introduction:
                "Triggers are what starts the processing of an automation rule. It is possible to specify multiple triggers for the same rule. Once a trigger starts, IoTology will validate the conditions, if any, and call the action.",
              learn_more: "Learn more about triggers",
              name: "Trigger",
              type_select: "Trigger type",
              type: {
                device: {
                  extra_fields: {
                    above: "Above",
                    below: "Below",
                    for: "Duration",
                  },
                  label: "Device",
                },
                event: {
                  event_data: "Event data",
                  event_type: "Event type",
                  label: "Event",
                },
                geo_location: {
                  enter: "Enter",
                  event: "Event:",
                  label: "Geolocation",
                  leave: "Leave",
                  source: "Source",
                  zone: "Zone",
                },
                homeassistant: {
                  event: "Event:",
                  label: "Home Assistant",
                  shutdown: "Shutdown",
                  start: "Start",
                },
                mqtt: {
                  label: "MQTT",
                  payload: "Payload (optional)",
                  topic: "Topic",
                },
                numeric_state: {
                  above: "Above",
                  below: "Below",
                  label: "Numeric state",
                  value_template: "Value template (optional)",
                },
                state: {
                  for: "For",
                  from: "From",
                  label: "State",
                  to: "To",
                },
                sun: {
                  event: "Event:",
                  label: "Sun",
                  offset: "Offset (optional)",
                  sunrise: "Sunrise",
                  sunset: "Sunset",
                },
                template: {
                  label: "Template",
                  value_template: "Value template",
                },
                time_pattern: {
                  hours: "Hours",
                  label: "Time Pattern",
                  minutes: "Minutes",
                  seconds: "Seconds",
                },
                time: {
                  at: "At",
                  label: "Time",
                },
                webhook: {
                  label: "Webhook",
                  webhook_id: "Webhook ID",
                },
                zone: {
                  enter: "Enter",
                  entity: "Entity with location",
                  event: "Event:",
                  label: "Zone",
                  leave: "Leave",
                  zone: "Zone",
                },
              },
              unsupported_platform: "Unsupported platform: {platform}",
            },
            unsaved_confirm:
              "You have unsaved changes. Are you sure you want to leave?",
          },
          picker: {
            add_automation: "Add automation",
            delete_automation: "Delete automation",
            delete_confirm: "Are you sure you want to delete this automation?",
            edit_automation: "Edit automation",
            header: "Automation Editor",
            introduction:
              "The automation editor allows you to create and edit automations. Please follow the link below to read the instructions to make sure that you have configured IoTology correctly.",
            learn_more: "Learn more about automations",
            no_automations: "We couldn’t find any editable automations",
            only_editable:
              "Only automations defined in automations.yaml are editable.",
            pick_automation: "Pick automation to edit",
            show_info_automation: "Show info about automation",
          },
        },
        cloud: {
          account: {
            alexa: {
              config_documentation: "Configuration documentation",
              disable: "disable",
              enable: "enable",
              enable_ha_skill: "Enable the IoTology skill for Alexa",
              enable_state_reporting: "Enable State Reporting",
              info: "With the Alexa integration for IoTology Cloud you'll be able to control all your IoTology devices via any Alexa-enabled device.",
              info_state_reporting:
                "If you enable state reporting, IoTology will send all state changes of exposed entities to Amazon. This allows you to always see the latest states in the Alexa app and use the state changes to create routines.",
              manage_entities: "Manage Entities",
              state_reporting_error: "Unable to {enable_disable} report state.",
              sync_entities: "Sync Entities",
              sync_entities_error: "Failed to sync entities:",
              title: "Alexa",
            },
            connected: "Connected",
            connection_status: "Cloud connection status",
            fetching_subscription: "Fetching subscription…",
            google: {
              config_documentation: "Configuration documentation",
              devices_pin: "Security Devices Pin",
              enable_ha_skill:
                "Activate the IoTology skill for Google Assistant",
              enable_state_reporting: "Enable State Reporting",
              enter_pin_error: "Unable to store pin:",
              enter_pin_hint: "Enter a PIN to use security devices",
              enter_pin_info:
                "Please enter a pin to interact with security devices. Security devices are doors, garage doors and locks. You will be asked to say/enter this pin when interacting with such devices via Google Assistant.",
              info: "With the Google Assistant integration for IoTology Cloud you'll be able to control all your IoTology devices via any Google Assistant-enabled device.",
              info_state_reporting:
                "If you enable state reporting, IoTology will send all state changes of exposed entities to Google. This allows you to always see the latest states in the Google app.",
              manage_entities: "Manage Entities",
              security_devices: "Security Devices",
              sync_entities: "Sync Entities to Google",
              sync_entities_404_message:
                "Failed to sync your entities to Google, ask Google 'Hey Google, sync my devices' to sync your entities.",
              title: "Google Assistant",
            },
            integrations: "Integrations",
            integrations_introduction:
              "Integrations for IoTology Cloud allow you to connect with services in the cloud without having to expose your IoTology instance publicly on the internet.",
            integrations_introduction2: "Check the website for ",
            integrations_link_all_features: " all available features",
            manage_account: "Manage Account",
            nabu_casa_account: "Nabu Casa Account",
            not_connected: "Not Connected",
            remote: {
              access_is_being_prepared:
                "Remote access is being prepared. We will notify you when it's ready.",
              certificate_info: "Certificate Info",
              info: "IoTology Cloud provides a secure remote connection to your instance while away from home.",
              instance_is_available: "Your instance is available at",
              instance_will_be_available: "Your instance will be available at",
              link_learn_how_it_works: "Learn how it works",
              title: "Remote Control",
            },
            sign_out: "Sign out",
            thank_you_note:
              "Thank you for being part of IoTology Cloud. It's because of people like you that we are able to make a great home automation experience for everyone. Thank you!",
            webhooks: {
              disable_hook_error_msg: "Failed to disable webhook:",
              info: "Anything that is configured to be triggered by a webhook can be given a publicly accessible URL to allow you to send data back to IoTology from anywhere, without exposing your instance to the internet.",
              link_learn_more:
                "Learn more about creating webhook-powered automations.",
              loading: "Loading ...",
              manage: "Manage",
              no_hooks_yet:
                "Looks like you have no webhooks yet. Get started by configuring a ",
              no_hooks_yet_link_automation: "webhook automation",
              no_hooks_yet_link_integration: "webhook-based integration",
              no_hooks_yet2: " or by creating a ",
              title: "Webhooks",
            },
          },
          alexa: {
            banner:
              "Editing which entities are exposed via this UI is disabled because you have configured entity filters in configuration.yaml.",
            expose: "Expose to Alexa",
            exposed_entities: "Exposed entities",
            not_exposed_entities: "Not Exposed entities",
            title: "Alexa",
          },
          caption: "IoTology Cloud",
          description_features:
            "Control away from home, integrate with Alexa and Google Assistant.",
          description_login: "Logged in as {email}",
          description_not_login: "Not logged in",
          dialog_certificate: {
            certificate_expiration_date: "Certificate expiration date",
            certificate_information: "Certificate Information",
            close: "Close",
            fingerprint: "Certificate fingerprint:",
            will_be_auto_renewed: "Will be automatically renewed",
          },
          dialog_cloudhook: {
            available_at: "The webhook is available at the following url:",
            close: "Close",
            confirm_disable: "Are you sure you want to disable this webhook?",
            copied_to_clipboard: "Copied to clipboard",
            info_disable_webhook:
              "If you no longer want to use this webhook, you can",
            link_disable_webhook: "disable it",
            managed_by_integration:
              "This webhook is managed by an integration and cannot be disabled.",
            view_documentation: "View documentation",
            webhook_for: "Webhook for {name}",
          },
          forgot_password: {
            check_your_email:
              "Check your email for instructions on how to reset your password.",
            email: "Email",
            email_error_msg: "Invalid email",
            instructions:
              "Enter your email address and we will send you a link to reset your password.",
            send_reset_email: "Send reset email",
            subtitle: "Forgot your password",
            title: "Forgot password",
          },
          google: {
            banner:
              "Editing which entities are exposed via this UI is disabled because you have configured entity filters in configuration.yaml.",
            disable_2FA: "Disable two factor authentication",
            expose: "Expose to Google Assistant",
            exposed_entities: "Exposed entities",
            not_exposed_entities: "Not Exposed entities",
            sync_to_google: "Synchronizing changes to Google.",
            title: "Google Assistant",
          },
          login: {
            alert_email_confirm_necessary:
              "You need to confirm your email before logging in.",
            alert_password_change_required:
              "You need to change your password before logging in.",
            dismiss: "Dismiss",
            email: "Email",
            email_error_msg: "Invalid email",
            forgot_password: "forgot password?",
            introduction:
              "IoTology Cloud provides you with a secure remote connection to your instance while away from home. It also allows you to connect with cloud-only services: Amazon Alexa and Google Assistant.",
            introduction2: "This service is run by our partner ",
            introduction2a:
              ", a company founded by the founders of IoTology and Hass.io.",
            introduction3:
              "IoTology Cloud is a subscription service with a free one month trial. No payment information necessary.",
            learn_more_link: "Learn more about IoTology Cloud",
            password: "Password",
            password_error_msg: "Passwords are at least 8 characters",
            sign_in: "Sign in",
            start_trial: "Start your free 1 month trial",
            title: "Cloud Login",
            trial_info: "No payment information necessary",
          },
          register: {
            account_created:
              "Account created! Check your email for instructions on how to activate your account.",
            create_account: "Create Account",
            email_address: "Email address",
            email_error_msg: "Invalid email",
            feature_amazon_alexa: "Integration with Amazon Alexa",
            feature_google_home: "Integration with Google Assistant",
            feature_remote_control: "Control of IoTology away from home",
            feature_webhook_apps:
              "Easy integration with webhook-based apps like OwnTracks",
            headline: "Start your free trial",
            information:
              "Create an account to start your free one month trial with IoTology Cloud. No payment information necessary.",
            information2:
              "The trial will give you access to all the benefits of IoTology Cloud, including:",
            information3: "This service is run by our partner ",
            information3a:
              ", a company founded by the founders of IoTology and Hass.io.",
            information4:
              "By registering an account you agree to the following terms and conditions.",
            link_privacy_policy: "Privacy Policy",
            link_terms_conditions: "Terms and Conditions",
            password: "Password",
            password_error_msg: "Passwords are at least 8 characters",
            resend_confirm_email: "Resend confirmation email",
            start_trial: "Start Trial",
            title: "Register Account",
          },
        },
        common: {
          editor: {
            confirm_unsaved:
              "You have unsaved changes. Are you sure you want to leave?",
          },
        },
        core: {
          caption: "General",
          description: "Change your general IoTology configuration",
          section: {
            core: {
              core_config: {
                edit_requires_storage:
                  "Editor disabled because config stored in configuration.yaml.",
                elevation: "Elevation",
                elevation_feet: "feet",
                elevation_meters: "meters",
                imperial_example: "Fahrenheit, pounds",
                latitude: "Latitude",
                location_name: "Name of your IoTology installation",
                longitude: "Longitude",
                metric_example: "Celsius, kilograms",
                save_button: "Save",
                time_zone: "Time Zone",
                unit_system: "Unit System",
                unit_system_imperial: "Imperial",
                unit_system_metric: "Metric",
              },
              header: "General Configuration",
              introduction:
                "Changing your configuration can be a tiresome process. We know. This section will try to make your life a little bit easier.",
            },
            server_control: {
              reloading: {
                automation: "Reload automations",
                core: "Reload core",
                group: "Reload groups",
                heading: "Configuration reloading",
                introduction:
                  "Some parts of IoTology can reload without requiring a restart. Hitting reload will unload their current configuration and load the new one.",
                script: "Reload scripts",
              },
              server_management: {
                heading: "Server management",
                introduction: "Control your IoTology server… from IoTology.",
                restart: "Restart",
                stop: "Stop",
              },
              validation: {
                check_config: "Check config",
                heading: "Configuration validation",
                introduction:
                  "Validate your configuration if you recently made some changes to your configuration and want to make sure that it is all valid",
                invalid: "Configuration invalid",
                valid: "Configuration valid!",
              },
            },
          },
        },
        customize: {
          attributes_customize:
            "The following attributes are already set in customize.yaml",
          attributes_not_set:
            "The following attributes weren't set. Set them if you like.",
          attributes_outside:
            "The following attributes are customized from outside of customize.yaml",
          attributes_override: "You can override them if you like.",
          attributes_set:
            "The following attributes of the entity are set programmatically.",
          caption: "Customizations",
          description: "Customize your entities",
          different_include:
            "Possibly via a domain, a glob or a different include.",
          pick_attribute: "Pick an attribute to override",
          picker: {
            header: "Customizations",
            introduction:
              "Tweak per-entity attributes. Added/edited customizations will take effect immediately. Removed customizations will take effect when the entity is updated.",
          },
          warning: {
            include_link: "include customize.yaml",
            include_sentence:
              "It seems that your configuration.yaml doesn't properly",
            not_applied:
              "Changes made here are written in it, but will not be applied after a configuration reload unless the include is in place.",
          },
        },
        devices: {
          area_picker_label: "Area",
          automation: {
            actions: {
              caption: "When something is triggered...",
            },
            automations: "Automations",
            conditions: {
              caption: "Only do something if...",
            },
            create: "Create automation with device",
            no_automations: "No automations",
            no_device_automations:
              "There are no automations available for this device.",
            triggers: {
              caption: "Do something when...",
            },
          },
          automations: "Automations",
          cant_edit: "You can only edit items that are created in the UI.",
          caption: "Devices",
          confirm_rename_entity_ids:
            "Do you also want to rename the entity id's of your entities?",
          data_table: {
            area: "Area",
            battery: "Battery",
            device: "Device",
            integration: "Integration",
            manufacturer: "Manufacturer",
            model: "Model",
          },
          description: "Manage connected devices",
          details: "Here are all the details of your device.",
          device_not_found: "Device not found.",
          entities: {
            add_entities_lovelace: "Add to Lovelace",
            entities: "Entities",
            none: "This device has no entities",
          },
          info: "Device info",
          name: "Name",
          scene: {
            create: "Create scene with device",
            no_scenes: "No scenes",
            scenes: "Scenes",
          },
          scenes: "Scenes",
          script: {
            create: "Create script with device",
            no_scripts: "No scripts",
            scripts: "Scripts",
          },
          scripts: "Scripts",
          unknown_error: "Unknown error",
          unnamed_device: "Unnamed device",
          update: "Update",
        },
        entities: {
          caption: "Entities",
          description: "Overview of all known entities.",
          editor: {
            confirm_delete: "Are you sure you want to delete this entry?",
            confirm_delete2:
              "Deleting an entry will not remove the entity from IoTology. To do this, you will need to remove the integration '{platform}' from IoTology.",
            default_name: "New Area",
            delete: "DELETE",
            enabled_cause: "Disabled by {cause}.",
            enabled_description:
              "Disabled entities will not be added to IoTology.",
            enabled_label: "Enable entity",
            entity_id: "Entity ID",
            name: "Name Override",
            note: "Note: this might not work yet with all integrations.",
            unavailable: "This entity is not currently available.",
            update: "UPDATE",
          },
          picker: {
            disable_selected: {
              button: "Disable selected",
              confirm_text: "Disabled entities will not be added to IoTology.",
              confirm_title: "Do you want to disable {number} entities?",
            },
            enable_selected: {
              button: "Enable selected",
              confirm_text:
                "This will make them available in IoTology again if they are now disabled.",
              confirm_title: "Do you want to enable {number} entities?",
            },
            filter: {
              filter: "Filter",
              show_disabled: "Show disabled entities",
              show_readonly: "Show read-only entities",
              show_unavailable: "Show unavailable entities",
            },
            header: "Entities",
            headers: {
              enabled: "Enabled",
              entity_id: "Entity ID",
              integration: "Integration",
              name: "Name",
              status: "Status",
            },
            integrations_page: "Integrations page",
            introduction:
              "IoTology keeps a registry of every entity it has ever seen that can be uniquely identified. Each of these entities will have an entity ID assigned which will be reserved for just this entity.",
            introduction2:
              "Use the entity registry to override the name, change the entity ID or remove the entry from IoTology.",
            remove_selected: {
              button: "Remove selected",
              confirm_text:
                "Entities can only be removed when the integration is no longer providing the entities.",
              confirm_title: "Do you want to remove {number} entities?",
            },
            selected: "{number} selected",
            show_disabled: "Show disabled entities",
            status: {
              disabled: "Disabled",
              ok: "Ok",
              readonly: "Read-only",
              unavailable: "Unavailable",
            },
            unavailable: "(unavailable)",
          },
        },
        header: "Configure IoTology",
        helpers: {
          caption: "Helpers",
          description: "Elements that can help build automations.",
          dialog: {
            add_helper: "Add helper",
            add_platform: "Add {platform}",
            create: "Create",
          },
          picker: {
            add_helper: "Add helper",
            headers: {
              editable: "Editable",
              name: "Name",
              type: "Type",
            },
          },
          types: {
            input_boolean: "Toggle",
            input_datetime: "Date and/or time",
            input_number: "Number",
            input_select: "Dropdown",
            input_text: "Text",
          },
        },
        integrations: {
          caption: "Integrations",
          config_entry: {
            area: "In {area}",
            delete_button: "Delete {integration}",
            delete_confirm: "Are you sure you want to delete this integration?",
            device_unavailable: "device unavailable",
            entity_unavailable: "entity unavailable",
            firmware: "Firmware: {version}",
            hub: "Connected via",
            manuf: "by {manufacturer}",
            no_area: "No Area",
            no_device: "Entities without devices",
            no_devices: "This integration has no devices.",
            restart_confirm:
              "Restart IoTology to finish removing this integration",
            settings_button: "Edit settings for {integration}",
            system_options_button: "System options for {integration}",
            via: "Connected via",
          },
          config_flow: {
            aborted: "Aborted",
            add_area: "Add Area",
            area_picker_label: "Area",
            close: "Close",
            created_config: "Created configuration for {name}.",
            dismiss: "Dismiss dialog",
            error_saving_area: "Error saving area: {error}",
            external_step: {
              description:
                "This step requires you to visit an external website to be completed.",
              open_site: "Open website",
            },
            failed_create_area: "Failed to create area.",
            finish: "Finish",
            name_new_area: "Name of the new area?",
            not_all_required_fields: "Not all required fields are filled in.",
            submit: "Submit",
          },
          configure: "Configure",
          configured: "Configured",
          description: "Manage and setup integrations",
          details: "Integration details",
          discovered: "Discovered",
          home_assistant_website: "IoTology website",
          ignore: {
            confirm_delete_ignore:
              "This will make the integration appear in your discovered integrations again when it gets discovered. This might require a restart or take some time.",
            confirm_delete_ignore_title: "Stop ignoring {name}?",
            confirm_ignore:
              "Are you sure you don't want to setup this integration? You can undo this by clicking the 'Show ignored integrations' in the overflow menu on the top right.",
            confirm_ignore_title: "Ignore discovery of {name}?",
            hide_ignored: "Hide ignored integrations",
            ignore: "Ignore",
            ignored: "Ignored",
            show_ignored: "Show ignored integrations",
            stop_ignore: "Stop ignoring",
          },
          integration_not_found: "Integration not found.",
          new: "Set up a new integration",
          none: "Nothing configured yet",
          note_about_integrations:
            "Not all integrations can be configured via the UI yet.",
          note_about_website_reference: "More are available on the ",
        },
        introduction:
          "Here it is possible to configure your components and IoTology. Not everything is possible to configure from the UI yet, but we're working on it.",
        lovelace: {
          caption: "Lovelace Dashboards",
          dashboards: {
            cant_edit_yaml:
              "Dashboards defined in YAML can not be edited from the UI. Change them in configuration.yaml.",
            caption: "Dashboards",
            conf_mode: {
              storage: "UI controlled",
              yaml: "YAML file",
            },
            confirm_delete: "Are you sure you want to delete this dashboard?",
            detail: {
              create: "Create",
              delete: "Delete",
              dismiss: "Close",
              edit_dashboard: "Edit dashboard",
              icon: "Sidebar icon",
              new_dashboard: "Add new dashboard",
              require_admin: "Admin only",
              show_sidebar: "Show in sidebar",
              title: "Sidebar title",
              update: "Update",
              url: "Url",
              url_error_msg:
                "The url can not contain spaces or special characters, except for _ and -",
            },
            picker: {
              add_dashboard: "Add dashboard",
              headers: {
                conf_mode: "Configuration method",
                filename: "Filename",
                require_admin: "Admin only",
                sidebar: "Show in sidebar",
                title: "Title",
              },
              open: "Open dashboard",
            },
          },
          description: "Configure your Lovelace Dashboards",
          resources: {
            cant_edit_yaml:
              "You are using Lovelace in YAML mode, therefore you can not manage your resources through the UI. Manage them in configuration.yaml.",
            caption: "Resources",
            confirm_delete: "Are you sure you want to delete this resource?",
            detail: {
              create: "Create",
              delete: "Delete",
              dismiss: "Close",
              new_resource: "Add new resource",
              type: "Resource type",
              update: "Update",
              url: "Url",
              url_error_msg: "Url is a required field",
              warning_header: "Be cautious!",
              warning_text:
                "Adding resources can be dangerous, make sure you know the source of the resource and trust them. Bad resources could seriously harm your system.",
            },
            picker: {
              add_resource: "Add resource",
              headers: {
                type: "Type",
                url: "Url",
              },
            },
            refresh_body:
              "You have to refresh the page to complete the removal, do you want to refresh now?",
            refresh_header: "Do you want to refresh?",
            types: {
              css: "Stylesheet",
              html: "HTML (deprecated)",
              js: "JavaScript File (deprecated)",
              module: "JavaScript Module",
            },
          },
        },
        person: {
          add_person: "Add Person",
          caption: "Persons",
          confirm_delete: "Are you sure you want to delete this person?",
          confirm_delete2:
            "All devices belonging to this person will become unassigned.",
          create_person: "Create Person",
          description: "Manage the persons that IoTology tracks.",
          detail: {
            create: "Create",
            delete: "Delete",
            device_tracker_intro:
              "Select the devices that belong to this person.",
            device_tracker_pick: "Pick device to track",
            device_tracker_picked: "Track Device",
            link_integrations_page: "Integrations page",
            link_presence_detection_integrations:
              "Presence Detection Integrations",
            linked_user: "Linked User",
            name: "Name",
            name_error_msg: "Name is required",
            new_person: "New Person",
            no_device_tracker_available_intro:
              "When you have devices that indicate the presence of a person, you will be able to assign them to a person here. You can add your first device by adding a presence-detection integration from the integrations page.",
            update: "Update",
          },
          introduction:
            "Here you can define each person of interest in IoTology.",
          no_persons_created_yet:
            "Looks like you have not created any persons yet.",
          note_about_persons_configured_in_yaml:
            "Note: persons configured via configuration.yaml cannot be edited via the UI.",
        },
        scene: {
          activated: "Activated scene {name}.",
          caption: "Scenes",
          description: "Create and edit scenes",
          editor: {
            default_name: "New Scene",
            devices: {
              add: "Add a device",
              delete: "Delete device",
              header: "Devices",
              introduction:
                "Add the devices that you want to be included in your scene. Set all the devices to the state you want for this scene.",
            },
            entities: {
              add: "Add an entity",
              delete: "Delete entity",
              device_entities:
                "If you add an entity that belongs to a device, the device will be added.",
              header: "Entities",
              introduction:
                "Entities that do not belong to a device can be set here.",
              without_device: "Entities without device",
            },
            introduction: "Use scenes to bring your home alive.",
            load_error_not_editable: "Only scenes in scenes.yaml are editable.",
            load_error_unknown: "Error loading scene ({err_no}).",
            name: "Name",
            save: "Save",
            unsaved_confirm:
              "You have unsaved changes. Are you sure you want to leave?",
          },
          picker: {
            add_scene: "Add scene",
            delete_confirm: "Are you sure you want to delete this scene?",
            delete_scene: "Delete scene",
            edit_scene: "Edit scene",
            header: "Scene Editor",
            introduction:
              "The scene editor allows you to create and edit scenes. Please follow the link below to read the instructions to make sure that you have configured IoTology correctly.",
            learn_more: "Learn more about scenes",
            no_scenes: "We couldn’t find any editable scenes",
            only_editable: "Only scenes defined in scenes.yaml are editable.",
            pick_scene: "Pick scene to edit",
            show_info_scene: "Show info about scene",
          },
        },
        script: {
          caption: "Scripts",
          description: "Create and edit scripts",
          editor: {
            alias: "Name",
            default_name: "New Script",
            delete_confirm: "Are you sure you want to delete this script?",
            delete_script: "Delete script",
            header: "Script: {name}",
            introduction: "Use scripts to execute a sequence of actions.",
            link_available_actions: "Learn more about available actions.",
            load_error_not_editable:
              "Only scripts inside scripts.yaml are editable.",
            sequence: "Sequence",
            sequence_sentence: "The sequence of actions of this script.",
          },
          picker: {
            add_script: "Add script",
            edit_script: "Edit script",
            header: "Script Editor",
            introduction:
              "The script editor allows you to create and edit scripts. Please follow the link below to read the instructions to make sure that you have configured IoTology correctly.",
            learn_more: "Learn more about scripts",
            no_scripts: "We couldn’t find any editable scripts",
            trigger_script: "Trigger script",
          },
        },
        server_control: {
          caption: "Server Controls",
          description: "Restart and stop the IoTology server",
          section: {
            reloading: {
              automation: "Reload automations",
              core: "Reload location & customizations",
              group: "Reload groups",
              heading: "YAML configuration reloading",
              introduction:
                "Some parts of IoTology can reload without requiring a restart. Hitting reload will unload their current YAML configuration and load the new one.",
              person: "Reload persons",
              scene: "Reload scenes",
              script: "Reload scripts",
              zone: "Reload zones",
            },
            server_management: {
              confirm_restart: "Are you sure you want to restart IoTology?",
              confirm_stop: "Are you sure you want to stop IoTology?",
              heading: "Server management",
              introduction: "Control your IoTology server… from IoTology.",
              restart: "Restart",
              stop: "Stop",
            },
            validation: {
              check_config: "Check configuration",
              heading: "Configuration validation",
              introduction:
                "Validate your configuration if you recently made some changes to your configuration and want to make sure that it is all valid",
              invalid: "Configuration invalid",
              valid: "Configuration valid!",
            },
          },
        },
        users: {
          add_user: {
            caption: "Add user",
            create: "Create",
            name: "Name",
            password: "Password",
            username: "Username",
          },
          caption: "Users",
          description: "Manage users",
          editor: {
            activate_user: "Activate user",
            active: "Active",
            caption: "View user",
            change_password: "Change password",
            confirm_user_deletion: "Are you sure you want to delete {name}?",
            deactivate_user: "Deactivate user",
            delete_user: "Delete user",
            enter_new_name: "Enter new name",
            group: "Group",
            group_update_failed: "Group update failed:",
            id: "ID",
            owner: "Owner",
            rename_user: "Rename user",
            system_generated: "System generated",
            system_generated_users_not_removable:
              "Unable to remove system generated users.",
            unnamed_user: "Unnamed User",
            user_rename_failed: "User rename failed:",
          },
          picker: {
            system_generated: "System generated",
            title: "Users",
          },
        },
        zha: {
          add_device_page: {
            discovery_text:
              "Discovered devices will show up here. Follow the instructions for your device(s) and place the device(s) in pairing mode.",
            header: "Zigbee Home Automation - Add Devices",
            search_again: "Search Again",
            spinner: "Searching for ZHA Zigbee devices...",
          },
          add: {
            caption: "Add Devices",
            description: "Add devices to the Zigbee network",
          },
          caption: "ZHA",
          cluster_attributes: {
            attributes_of_cluster: "Attributes of the selected cluster",
            get_zigbee_attribute: "Get Zigbee Attribute",
            header: "Cluster Attributes",
            help_attribute_dropdown:
              "Select an attribute to view or set its value.",
            help_get_zigbee_attribute:
              "Get the value for the selected attribute.",
            help_set_zigbee_attribute:
              "Set attribute value for the specified cluster on the specified entity.",
            introduction: "View and edit cluster attributes.",
            set_zigbee_attribute: "Set Zigbee Attribute",
          },
          cluster_commands: {
            commands_of_cluster: "Commands of the selected cluster",
            header: "Cluster Commands",
            help_command_dropdown: "Select a command to interact with.",
            introduction: "View and issue cluster commands.",
            issue_zigbee_command: "Issue Zigbee Command",
          },
          clusters: {
            header: "Clusters",
            help_cluster_dropdown:
              "Select a cluster to view attributes and commands.",
            introduction:
              "Clusters are the building blocks for Zigbee functionality. They seperate functionality into logical units. There are client and server types and that are comprised of attributes and commands.",
          },
          common: {
            add_devices: "Add Devices",
            clusters: "Clusters",
            devices: "Devices",
            manufacturer_code_override: "Manufacturer Code Override",
            value: "Value",
          },
          description: "Zigbee Home Automation network management",
          device_card: {
            area_picker_label: "Area",
            device_name_placeholder: "User given name",
            update_name_button: "Update Name",
          },
          devices: {
            header: "Zigbee Home Automation - Device",
          },
          group_binding: {
            bind_button_help:
              "Bind the selected group to the selected device clusters.",
            bind_button_label: "Bind Group",
            cluster_selection_help:
              "Select clusters to bind to the selected group.",
            group_picker_help: "Select a group to issue a bind command.",
            group_picker_label: "Bindable Groups",
            header: "Group Binding",
            introduction: "Bind and unbind groups.",
            unbind_button_help:
              "Unbind the selected group from the selected device clusters.",
            unbind_button_label: "Unbind Group",
          },
          groups: {
            add_members: "Add Members",
            adding_members: "Adding Members",
            caption: "Groups",
            create: "Create Group",
            create_group: "Zigbee Home Automation - Create Group",
            create_group_details:
              "Enter the required details to create a new zigbee group",
            creating_group: "Creating Group",
            description: "Create and modify Zigbee groups",
            group_details:
              "Here are all the details for the selected Zigbee group.",
            group_id: "Group ID",
            group_info: "Group Information",
            group_name_placeholder: "Group Name",
            group_not_found: "Group not found!",
            "group-header": "Zigbee Home Automation - Group Details",
            groups: "Groups",
            "groups-header": "Zigbee Home Automation - Group Management",
            header: "Zigbee Home Automation - Group Management",
            introduction: "Create and modify zigbee groups",
            manage_groups: "Manage Zigbee Groups",
            members: "Members",
            remove_groups: "Remove Groups",
            remove_members: "Remove Members",
            removing_groups: "Removing Groups",
            removing_members: "Removing Members",
            zha_zigbee_groups: "ZHA Zigbee Groups",
          },
          header: "Configure Zigbee Home Automation",
          introduction:
            "Here it is possible to configure the ZHA component. Not everything is possible to configure from the UI yet, but we're working on it.",
          network_management: {
            header: "Network Management",
            introduction: "Commands that affect the entire network",
          },
          node_management: {
            header: "Device Management",
            help_node_dropdown: "Select a device to view per-device options.",
            hint_battery_devices:
              "Note: Sleepy (battery powered) devices need to be awake when executing commands against them. You can generally wake a sleepy device by triggering it.",
            hint_wakeup:
              "Some devices such as Xiaomi sensors have a wake up button that you can press at ~5 second intervals that keep devices awake while you interact with them.",
            introduction:
              "Run ZHA commands that affect a single device. Pick a device to see a list of available commands.",
          },
          services: {
            reconfigure:
              "Reconfigure ZHA device (heal device). Use this if you are having issues with the device. If the device in question is a battery powered device please ensure it is awake and accepting commands when you use this service.",
            remove: "Remove a device from the ZigBee network.",
            updateDeviceName:
              "Set a custom name for this device in the device registry.",
          },
          title: "Zigbee Home Automation",
        },
        zone: {
          add_zone: "Add Zone",
          caption: "Zones",
          configured_in_yaml:
            "Zones configured via configuration.yaml cannot be edited via the UI.",
          confirm_delete: "Are you sure you want to delete this zone?",
          create_zone: "Create Zone",
          description: "Manage the zones you want to track persons in.",
          detail: {
            create: "Create",
            delete: "Delete",
            icon: "Icon",
            icon_error_msg:
              "Icon should be in the format prefix:iconname, for example: mdi:home",
            latitude: "Latitude",
            longitude: "Longitude",
            name: "Name",
            new_zone: "New Zone",
            passive: "Passive",
            passive_note:
              "Passive zones are hidden in the frontend and are not used as location for device trackers. This is useful if you just want to use it for automations.",
            radius: "Radius",
            required_error_msg: "This field is required",
            update: "Update",
          },
          edit_home_zone:
            "The radius of the Home zone can't be edited from the frontend yet. Drag the marker on the map to move the home zone.",
          edit_home_zone_narrow:
            "The radius of the Home zone can't be edited from the frontend yet. The location can be changed from the general configuration.",
          go_to_core_config: "Go to general configuration?",
          home_zone_core_config:
            "The location of your home zone is editable from the general configuration page. The radius of the Home zone can't be edited from the frontend yet. Do you want to go to the general configuration?",
          introduction:
            "Zones allow you to specify certain regions on earth. When a person is within a zone, the state will take the name from the zone. Zones can also be used as a trigger or condition inside automation setups.",
          no_zones_created_yet:
            "Looks like you have not created any zones yet.",
        },
        zwave: {
          caption: "Z-Wave",
          common: {
            index: "Index",
            instance: "Instance",
            unknown: "unknown",
            value: "Value",
            wakeup_interval: "Wakeup Interval",
          },
          description: "Manage your Z-Wave network",
          learn_more: "Learn more about Z-Wave",
          network_management: {
            header: "Z-Wave Network Management",
            introduction:
              "Run commands that affect the Z-Wave network. You won't get feedback on whether most commands succeeded, but you can check the OZW Log to try to find out.",
          },
          network_status: {
            network_started: "Z-Wave Network Started",
            network_started_note_all_queried: "All nodes have been queried.",
            network_started_note_some_queried:
              "Awake nodes have been queried. Sleeping nodes will be queried when they wake.",
            network_starting: "Starting Z-Wave Network...",
            network_starting_note:
              "This may take a while depending on the size of your network.",
            network_stopped: "Z-Wave Network Stopped",
          },
          node_config: {
            config_parameter: "Configuration Parameter",
            config_value: "Configuration Value",
            false: "False",
            header: "Node Configuration Options",
            seconds: "seconds",
            set_config_parameter: "Set Configuration Parameter",
            set_wakeup: "Set Wakeup Interval",
            true: "True",
          },
          ozw_log: {
            header: "OZW Log",
            introduction:
              "View the log. 0 is the minimum (loads entire log) and 1000 is the maximum. Load will show a static log and tail will auto update with the last specified number of lines of the log.",
          },
          services: {
            add_node: "Add Node",
            add_node_secure: "Add Node Secure",
            cancel_command: "Cancel Command",
            heal_network: "Heal Network",
            remove_node: "Remove Node",
            save_config: "Save Configuration",
            soft_reset: "Soft Reset",
            start_network: "Start Network",
            stop_network: "Stop Network",
            test_network: "Test Network",
          },
          values: {
            header: "Node Values",
          },
        },
      },
      custom: {
        external_panel: {
          complete_access: "It will have access to all data in IoTology.",
          hide_message:
            "Check docs for the panel_custom component to hide this message",
          question_trust: "Do you trust the external panel {name} at {link}?",
        },
      },
      "developer-tools": {
        tabs: {
          events: {
            alert_event_type: "Event type is a mandatory field",
            available_events: "Available Events",
            count_listeners: " ({count}  listeners)",
            data: "Event Data (YAML, optional)",
            description: "Fire an event on the event bus.",
            documentation: "Events Documentation.",
            event_fired: "Event {name} fired",
            fire_event: "Fire Event",
            listen_to_events: "Listen to events",
            listening_to: "Listening to",
            notification_event_fired: "Event {type} successful fired!",
            start_listening: "Start listening",
            stop_listening: "Stop listening",
            subscribe_to: "Event to subscribe to",
            title: "Events",
            type: "Event Type",
          },
          info: {
            built_using: "Built using",
            custom_uis: "Custom UIs:",
            default_ui: "{action} {name} as default page on this device",
            developed_by: "Developed by a bunch of awesome people.",
            frontend: "frontend-ui",
            frontend_version: "Frontend version: {version} - {type}",
            home_assistant_logo: "IoTology logo",
            icons_by: "Icons by",
            license: "Published under the Apache 2.0 license",
            lovelace_ui: "Go to the Lovelace UI",
            path_configuration: "Path to configuration.yaml: {path}",
            remove: "Remove",
            server: "server",
            set: "Set",
            source: "Source:",
            states_ui: "Go to the states UI",
            system_health_error:
              "System Health component is not loaded. Add 'system_health:' to configuration.yaml",
            title: "Info",
          },
          logs: {
            clear: "Clear",
            details: "Log Details ({level})",
            load_full_log: "Load Full IoTology Log",
            loading_log: "Loading error log…",
            multiple_messages:
              "message first occurred at {time} and shows up {counter} times",
            no_errors: "No errors have been reported.",
            no_issues: "There are no new issues!",
            refresh: "Refresh",
            title: "Logs",
          },
          mqtt: {
            description_listen: "Listen to a topic",
            description_publish: "Publish a packet",
            listening_to: "Listening to",
            message_received: "Message {id} received on {topic} at {time}:",
            payload: "Payload (template allowed)",
            publish: "Publish",
            start_listening: "Start listening",
            stop_listening: "Stop listening",
            subscribe_to: "Topic to subscribe to",
            title: "MQTT",
            topic: "topic",
          },
          services: {
            alert_parsing_yaml: "Error parsing YAML: {data}",
            call_service: "Call Service",
            column_description: "Description",
            column_example: "Example",
            column_parameter: "Parameter",
            data: "Service Data (YAML, optional)",
            description:
              "The service dev tool allows you to call any available service in IoTology.",
            fill_example_data: "Fill Example Data",
            no_description: "No description is available",
            no_parameters: "This service takes no parameters.",
            select_service: "Select a service to see the description",
            title: "Services",
          },
          states: {
            alert_entity_field: "Entity is a mandatory field",
            attributes: "Attributes",
            copied: "Copied to clipboard",
            copy_entity_attribute: "Copy attributes",
            copy_entity_id: "Copy ID",
            copy_entity_state: "Copy state",
            current_entities: "Current entities",
            description1: "Set the representation of a device within IoTology.",
            description2: "This will not communicate with the actual device.",
            entity: "Entity",
            filter_attributes: "Filter attributes",
            filter_entities: "Filter entities",
            filter_states: "Filter states",
            more_info: "More Info",
            no_entities: "No entities",
            set_state: "Set State",
            state: "State",
            state_attributes: "State attributes (YAML, optional)",
            title: "States",
          },
          templates: {
            description:
              "Templates are rendered using the Jinja2 template engine with some IoTology specific extensions.",
            editor: "Template editor",
            jinja_documentation: "Jinja2 template documentation",
            template_extensions: "IoTology template extensions",
            title: "Template",
            unknown_error_template: "Unknown error rendering template",
          },
        },
      },
      history: {
        period: "Period",
        showing_entries: "Showing entries for",
      },
      logbook: {
        entries_not_found: "No logbook entries found.",
        period: "Period",
        showing_entries: "Showing entries for",
      },
      lovelace: {
        add_entities: {
          generated_unsupported:
            "You can only use this function when you have taken control of the Lovelace UI.",
          saving_failed: "Saving Lovelace UI configuration failed.",
          yaml_unsupported:
            "You can not use this function when using Lovelace UI in YAML mode.",
        },
        cards: {
          confirm_delete: "Are you sure you want to delete this card?",
          empty_state: {
            go_to_integrations_page: "Go to the integrations page.",
            no_devices:
              "This page allows you to control your devices, however it looks like you have no devices set up yet. Head to the integrations page to get started.",
            title: "Welcome Home",
          },
          entities: {
            never_triggered: "Never triggered",
          },
          "picture-elements": {
            call_service: "Call service {name}",
            hold: "Hold:",
            more_info: "Show more-info: {name}",
            navigate_to: "Navigate to {location}",
            tap: "Tap:",
            toggle: "Toggle {name}",
            url: "Open window to {url_path}",
          },
          "safe-mode": {
            description:
              "IoTology ran into trouble while loading your configuration and is now running in safe mode. Take a look at the error log to see what went wrong.",
            header: "Safe Mode Activated",
            show_errors: "Show errors",
          },
          "shopping-list": {
            add_item: "Add item",
            checked_items: "Checked items",
            clear_items: "Clear checked items",
          },
        },
        changed_toast: {
          message:
            "The Lovelace UI configuration for this dashboard was updated, refresh to see changes?",
          refresh: "Refresh",
        },
        editor: {
          card: {
            alarm_panel: {
              available_states: "Available States",
            },
            "alarm-panel": {
              available_states: "Available States",
              name: "Alarm Panel",
            },
            button: {
              name: "Button",
            },
            conditional: {
              name: "Conditional",
            },
            config: {
              optional: "Optional",
              required: "Required",
            },
            entities: {
              name: "Entities",
              show_header_toggle: "Show Header Toggle?",
              toggle: "Toggle entities.",
            },
            "entity-button": {
              name: "Entity Button",
            },
            "entity-filter": {
              name: "Entity Filter",
            },
            gauge: {
              name: "Gauge",
              severity: {
                define: "Define Severity?",
                green: "Green",
                red: "Red",
                yellow: "Yellow",
              },
            },
            generic: {
              aspect_ratio: "Aspect Ratio",
              camera_image: "Camera Entity",
              camera_view: "Camera View",
              entities: "Entities",
              entity: "Entity",
              hold_action: "Hold Action",
              hours_to_show: "Hours to Show",
              icon: "Icon",
              icon_height: "Icon Height",
              image: "Image Path",
              maximum: "Maximum",
              minimum: "Minimum",
              name: "Name",
              refresh_interval: "Refresh Interval",
              show_icon: "Show Icon?",
              show_name: "Show Name?",
              show_state: "Show State?",
              tap_action: "Tap Action",
              theme: "Theme",
              title: "Title",
              unit: "Unit",
              url: "Url",
            },
            glance: {
              columns: "Columns",
              name: "Glance",
            },
            "history-graph": {
              name: "History Graph",
            },
            "horizontal-stack": {
              name: "Horizontal Stack",
            },
            iframe: {
              name: "iFrame",
            },
            light: {
              name: "Light",
            },
            map: {
              dark_mode: "Dark Mode?",
              default_zoom: "Default Zoom",
              geo_location_sources: "Geolocation Sources",
              name: "Map",
              source: "Source",
            },
            markdown: {
              content: "Content",
              name: "Markdown",
            },
            "media-control": {
              name: "Media Control",
            },
            "picture-elements": {
              name: "Picture Elements",
            },
            "picture-entity": {
              name: "Picture Entity",
            },
            "picture-glance": {
              name: "Picture Glance",
            },
            picture: {
              name: "Picture",
            },
            "plant-status": {
              name: "Plant Status",
            },
            sensor: {
              graph_detail: "Graph Detail",
              graph_type: "Graph Type",
              name: "Sensor",
            },
            "shopping-list": {
              integration_not_loaded:
                "This card requires the `shopping_list` integration to be set up.",
              name: "Shopping List",
            },
            thermostat: {
              name: "Thermostat",
            },
            "vertical-stack": {
              name: "Vertical Stack",
            },
            "weather-forecast": {
              name: "Weather Forecast",
            },
          },
          edit_card: {
            add: "Add Card",
            delete: "Delete Card",
            edit: "Edit",
            header: "Card Configuration",
            move: "Move to View",
            options: "More options",
            pick_card: "Which card would you like to add?",
            pick_card_view_title:
              "Which card would you like to add to your {name} view?",
            save: "Save",
            show_code_editor: "Show Code Editor",
            show_visual_editor: "Show Visual Editor",
            toggle_editor: "Toggle Editor",
          },
          edit_lovelace: {
            edit_title: "Edit title",
            explanation:
              "This title is shown above all your views in the Lovelace UI.",
            header: "Title of your Lovelace UI",
          },
          edit_view: {
            add: "Add view",
            delete: "Delete view",
            edit: "Edit view",
            header: "View Configuration",
            header_name: "{name} View Configuration",
            move_left: "Move view left",
            move_right: "Move view right",
            tab_badges: "Badges",
            tab_settings: "Settings",
          },
          header: "Edit UI",
          menu: {
            open: "Open Lovelace UI menu",
            raw_editor: "Raw configuration editor",
          },
          migrate: {
            header: "Configuration Incompatible",
            migrate: "Migrate configuration",
            para_migrate:
              "IoTology can add ID's to all your cards and views automatically for you by pressing the 'Migrate configuration' button.",
            para_no_id:
              "This element doesn't have an ID. Please add an ID to this element in 'ui-lovelace.yaml'.",
          },
          raw_editor: {
            confirm_remove_config_text:
              "We will automatically generate your Lovelace UI views with your areas and devices if you remove your Lovelace UI configuration.",
            confirm_remove_config_title:
              "Are you sure you want to remove your Lovelace UI configuration? We will automatically generate your Lovelace UI views with your areas and devices.",
            confirm_unsaved_changes:
              "You have unsaved changes, are you sure you want to exit?",
            confirm_unsaved_comments:
              "Your configuration contains comment(s), these will not be saved. Do you want to continue?",
            error_invalid_config: "Your configuration is not valid: {error}",
            error_parse_yaml: "Unable to parse YAML: {error}",
            error_remove: "Unable to remove configuration: {error}",
            error_save_yaml: "Unable to save YAML: {error}",
            header: "Edit Configuration",
            resources_moved:
              "Resources should no longer be added to the Lovelace configuration but can be added in the Lovelace config panel.",
            save: "Save",
            saved: "Saved",
            unsaved_changes: "Unsaved changes",
          },
          save_config: {
            cancel: "Never mind",
            close: "Close",
            header: "Take control of your Lovelace UI",
            para: "By default IoTology will maintain your user interface, updating it when new entities or Lovelace UI components become available. If you take control we will no longer make changes automatically for you.",
            para_sure:
              "Are you sure you want to take control of your user interface?",
            save: "Take control",
            yaml_config:
              "To help you start here is the current config of this dashboard:",
            yaml_control:
              "To take control in YAML mode, create a YAML file with the name you specified in your config for this dashboard, or the default 'ui-lovelace.yaml'.",
            yaml_mode:
              "You are using YAML mode, that means you can not change your Lovelace config from the UI. If you want to change Lovelace from the UI, remove the 'mode: yaml' from your Lovelace configuration in 'configuration.yaml.'",
          },
          suggest_card: {
            add: "Add to Lovelace UI",
            create_own: "Pick different card",
            header: "We created a suggestion for you",
          },
          view: {
            panel_mode: {
              description:
                "This renders the first card at full width; other cards in this view will not be rendered.",
              title: "Panel Mode?",
            },
          },
        },
        menu: {
          close: "Close",
          configure_ui: "Configure UI",
          exit_edit_mode: "Exit UI edit mode",
          help: "Help",
          refresh: "Refresh",
          unused_entities: "Unused entities",
        },
        reload_lovelace: "Reload UI",
        unused_entities: {
          available_entities:
            "These are the entities that you have available, but are not in your Lovelace UI yet.",
          domain: "Domain",
          entity: "Entity",
          entity_id: "Entity ID",
          last_changed: "Last Changed",
          select_to_add:
            "Select the entities you want to add to a card and then click the add card button.",
          title: "Unused entities",
        },
        views: {
          confirm_delete: "Are you sure you want to delete this view?",
          existing_cards:
            "You can't delete a view that has cards in it. Remove the cards first.",
        },
        warning: {
          entity_non_numeric: "Entity is non-numeric: {entity}",
          entity_not_found: "Entity not available: {entity}",
        },
      },
      mailbox: {
        delete_button: "Delete",
        delete_prompt: "Delete this message?",
        empty: "You do not have any messages",
        playback_title: "Message playback",
      },
      "page-authorize": {
        abort_intro: "Login aborted",
        authorizing_client:
          "You're about to give {clientId} access to your IoTology instance.",
        form: {
          providers: {
            command_line: {
              abort: {
                login_expired: "Session expired, please login again.",
              },
              error: {
                invalid_auth: "Invalid username or password",
                invalid_code: "Invalid authentication code",
              },
              step: {
                init: {
                  data: {
                    password: "Password",
                    username: "Username",
                  },
                },
                mfa: {
                  data: {
                    code: "Two-factor Authentication Code",
                  },
                  description:
                    "Open the **{mfa_module_name}** on your device to view your two-factor authentication code and verify your identity:",
                },
              },
            },
            homeassistant: {
              abort: {
                login_expired: "Session expired, please login again.",
              },
              error: {
                invalid_auth: "Invalid username or password",
                invalid_code: "Invalid authentication code",
              },
              step: {
                init: {
                  data: {
                    password: "Password",
                    username: "Username",
                  },
                },
                mfa: {
                  data: {
                    code: "Two-factor Authentication Code",
                  },
                  description:
                    "Open the **{mfa_module_name}** on your device to view your two-factor authentication code and verify your identity:",
                },
              },
            },
            legacy_api_password: {
              abort: {
                login_expired: "Session expired, please login again.",
                no_api_password_set:
                  "You don't have an API password configured.",
              },
              error: {
                invalid_auth: "Invalid API password",
                invalid_code: "Invalid authentication code",
              },
              step: {
                init: {
                  data: {
                    password: "API Password",
                  },
                  description:
                    "Please input the API password in your HTTP configuration:",
                },
                mfa: {
                  data: {
                    code: "Two-factor Authentication Code",
                  },
                  description:
                    "Open the **{mfa_module_name}** on your device to view your two-factor authentication code and verify your identity:",
                },
              },
            },
            trusted_networks: {
              abort: {
                not_whitelisted: "Your computer is not whitelisted.",
              },
              step: {
                init: {
                  data: {
                    user: "User",
                  },
                  description: "Please select a user you want to login as:",
                },
              },
            },
          },
          unknown_error: "Something went wrong",
          working: "Please wait",
        },
        initializing: "Initializing",
        logging_in_with: "Logging in with **{authProviderName}**.",
        pick_auth_provider: "Or log in with",
      },
      "page-demo": {
        cards: {
          demo: {
            demo_by: "by {name}",
            introduction:
              "Welcome home! You've reached the IoTology demo where we showcase the best UIs created by our community.",
            learn_more: "Learn more about IoTology",
            next_demo: "Next demo",
          },
        },
        config: {
          arsaboo: {
            labels: {
              activity: "Activity",
              air: "Air",
              commute_home: "Commute to Home",
              entertainment: "Entertainment",
              hdmi_input: "HDMI Input",
              hdmi_switcher: "HDMI Switcher",
              information: "Information",
              lights: "Lights",
              morning_commute: "Morning Commute",
              total_tv_time: "Total TV Time",
              turn_tv_off: "Turn Television off",
              volume: "Volume",
            },
            names: {
              family_room: "Family Room",
              hallway: "Hallway",
              kitchen: "Kitchen",
              left: "Left",
              master_bedroom: "Master Bedroom",
              mirror: "Mirror",
              patio: "Patio",
              right: "Right",
              temperature_study: "Temperature Study",
              upstairs: "Upstairs",
            },
            unit: {
              minutes_abbr: "min",
              watching: "watching",
            },
          },
        },
      },
      "page-onboarding": {
        "core-config": {
          button_detect: "Detect",
          finish: "Next",
          intro:
            "Hello {name}, welcome to IoTology. How would you like to name your home?",
          intro_location:
            "We would like to know where you live. This information will help with displaying information and setting up sun-based automations. This data is never shared outside of your network.",
          intro_location_detect:
            "We can help you fill in this information by making a one-time request to an external service.",
          location_name_default: "Home",
        },
        integration: {
          finish: "Finish",
          intro:
            "Devices and services are represented in IoTology as integrations. You can set them up now, or do it later from the configuration screen.",
          more_integrations: "More",
        },
        intro:
          "Are you ready to awaken your home, reclaim your privacy and join a worldwide community of tinkerers?",
        user: {
          create_account: "Create Account",
          data: {
            name: "Name",
            password: "Password",
            password_confirm: "Confirm Password",
            username: "Username",
          },
          error: {
            password_not_match: "Passwords don't match",
            required_fields: "Fill in all required fields",
          },
          intro: "Let's get started by creating a user account.",
          required_field: "Required",
        },
      },
      profile: {
        advanced_mode: {
          description: "Unlocks advanced features.",
          link_promo: "Learn more",
          title: "Advanced Mode",
        },
        change_password: {
          confirm_new_password: "Confirm New Password",
          current_password: "Current Password",
          error_required: "Required",
          header: "Change Password",
          new_password: "New Password",
          submit: "Submit",
        },
        current_user: "You are currently logged in as {fullName}.",
        force_narrow: {
          description:
            "This will hide the sidebar by default, similar to the mobile experience.",
          header: "Always hide the sidebar",
        },
        is_owner: "You are an owner.",
        language: {
          dropdown_label: "Language",
          header: "Language",
          link_promo: "Help translating",
        },
        logout: "Log out",
        logout_text: "Are you sure you want to log out?",
        logout_title: "Log out?",
        long_lived_access_tokens: {
          confirm_delete:
            "Are you sure you want to delete the access token for {name}?",
          create: "Create Token",
          create_failed: "Failed to create the access token.",
          created_at: "Created at {date}",
          delete_failed: "Failed to delete the access token.",
          description:
            "Create long-lived access tokens to allow your scripts to interact with your IoTology instance. Each token will be valid for 10 years from creation. The following long-lived access tokens are currently active.",
          empty_state: "You have no long-lived access tokens yet.",
          header: "Long-Lived Access Tokens",
          last_used: "Last used at {date} from {location}",
          learn_auth_requests: "Learn how to make authenticated requests.",
          not_used: "Has never been used",
          prompt_copy_token:
            "Copy your access token. It will not be shown again.",
          prompt_name: "Name?",
        },
        mfa_setup: {
          close: "Close",
          step_done: "Setup done for {step}",
          submit: "Submit",
          title_aborted: "Aborted",
          title_success: "Success!",
        },
        mfa: {
          confirm_disable: "Are you sure you want to disable {name}?",
          disable: "Disable",
          enable: "Enable",
          header: "Multi-factor Authentication Modules",
        },
        push_notifications: {
          description: "Send notifications to this device.",
          error_load_platform: "Configure notify.html5.",
          error_use_https: "Requires SSL enabled for frontend.",
          header: "Push Notifications",
          link_promo: "Learn more",
          push_notifications: "Push notifications",
        },
        refresh_tokens: {
          confirm_delete:
            "Are you sure you want to delete the refresh token for {name}?",
          created_at: "Created at {date}",
          current_token_tooltip: "Unable to delete current refresh token",
          delete_failed: "Failed to delete the refresh token.",
          description:
            "Each refresh token represents a login session. Refresh tokens will be automatically removed when you click log out. The following refresh tokens are currently active for your account.",
          header: "Refresh Tokens",
          last_used: "Last used at {date} from {location}",
          not_used: "Has never been used",
          token_title: "Refresh token for {clientId}",
        },
        themes: {
          dropdown_label: "Theme",
          error_no_theme: "No themes available.",
          header: "Theme",
          link_promo: "Learn about themes",
        },
        vibrate: {
          description:
            "Enable or disable vibration on this device when controlling devices.",
          header: "Vibrate",
        },
      },
      "shopping-list": {
        add_item: "Add item",
        clear_completed: "Clear completed",
        microphone_tip:
          "Tap the microphone on the top right and say or type “Add candy to my shopping list”",
      },
    },
    sidebar: {
      external_app_configuration: "App Configuration",
      log_out: "Log out",
      sidebar_toggle: "Sidebar Toggle",
    },
  },
};

export default data;
