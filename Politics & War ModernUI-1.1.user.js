// ==UserScript==
// @name        Politics & War Modern UI (Dark/Purple Theme)
// @namespace   yes
// @version     2.0 // Full Redesign: Infobar Mobile Sticky + nationtable Enhanced Scroll
// @description A highly modernized, card-based dark theme for Politics & War, with improved readability and consistency. Resource bar is fixed to bottom on mobile. Tables are optimized for horizontal scrolling.
// @author      Monti
// @match       https://politicsandwar.com/*
// @grant       GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        :root {
            --color-bg-primary: #0d1117;
            --color-bg-card: #161b22;
            --color-bg-header: #21262d;
            --color-border: #30363d;
            --color-text-primary: #c9d1d9;
            --color-text-light: #f0f6fc;
            --color-text-muted: #8b949e;
            --color-accent-blue: #58a6ff;
            --color-accent-purple: #f0f6fc;
            --color-accent-green: #2eff7d;
            --color-accent-yellow: #ffd700;
            --color-zinc-200: #e4e4e7;
            --color-zinc-700: #3f3f46;
            --color-red-400: #f87171;
            --color-red-600: #dc2626;
            --color-emerald-400: #34d399;
            --color-emerald-600: #059669;
        }

        html, body {
            background-color: var(--color-bg-primary) !important;
            color: var(--color-text-primary) !important;
            font-family: 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif !important;
            min-height: 100vh;
            margin: 0 !important;
            padding: 0 !important;
            box-sizing: border-box;
            line-height: 1.6;
        }

        #page-wrapper, #content-wrapper, .row[style*="padding-top:10px"],
        .tailwind, #tailwind-body, .col-sm-6, .col-xs-12, .col-md-10, .col-md-2,
        .container, .white-bg {
            background-color: transparent !important;
            color: inherit !important;
        }

        .container {
            max-width: 1280px !important;
            padding: 0 20px;
        }
        .row[style="padding-top:10px"] {
            padding-top: 30px !important;
        }

        /* --- 3. Header & Navigation (General styles for both) --- */
        .topnavigation, .informationbar.col-xs-12 {
            background: linear-gradient(to right, var(--color-bg-card), var(--color-bg-header)) !important;
            color: var(--color-text-light) !important;
            margin-bottom: 30px; /* Default margin for desktop below header/info bar */
            border: none;
        }

        /* --- Infobar / Resource Bar Redesign --- */
        .informationbar.col-xs-12 {
            border-radius: 12px !important;
            padding: 10px 20px !important; /* Original padding */
            min-height: 50px;
            display: flex;
            justify-content: flex-end; /* Push items to the right for desktop */
            align-items: center;
            border: 1px solid var(--color-border) !important;
            box-sizing: border-box;
            z-index: 100;
            max-width: 100vw !important;

            /* Base sticky for desktop */
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        /* Container for resources inside the infobar (the span with float:right) */
        .informationbar > span[style="float:right;"] {
            float: none !important; /* Override inline float */
            display: flex; /* Use flexbox for resource items */
            flex-wrap: nowrap; /* Prevent wrapping on desktop, keep on one line */
            align-items: center;
            gap: 10px; /* Space between resource items */
            padding-right: 0px; /* Adjust spacing */
            padding-left: 0px; /* Adjust spacing */
            height: 100%;
            overflow: visible !important; /* Important for existing tooltips */
            /* Ensure the text content is part of the flex flow, not just the <a> */
            line-height: 1.2; /* Tighter line-height for combined icon/text */
        }

        /* Styling for the resource icons and values */
        .informationbar > span[style="float:right;"] > a {
            display: flex; /* Make the <a> a flex container for its image */
            align-items: center; /* Vertically align icon with value/text */
            text-decoration: none;
            color: var(--color-text-primary);
            font-size: 14px; /* Default font size for values */
            font-weight: 600;
            padding: 4px 0;
            white-space: nowrap;
            transition: color 0.2s ease-in-out;
            margin-right: 0px; /* Remove default margin */
            flex-shrink: 0;
        }
        /* Style the actual numbers/text after the <a> tag */
        .informationbar > span[style="float:right;"] > a + span,
        .informationbar > span[style="float:right;"] > a + b,
        .informationbar > span[style="float:right;"] > a + *:not(a) {
            margin-left: 5px; /* Space between icon and value */
            margin-right: 5px; /* Space after value, before next icon */
            color: var(--color-accent-yellow); /* Default color for values */
            font-weight: 800;
            font-size: 15px; /* Default size for values */
            white-space: nowrap;
            display: inline-block; /* Ensure it stays inline with icon but takes content size */
            vertical-align: middle; /* Align with icon */
        }

        /* Adjust specific styling for money value */
        .informationbar > span[style="float:right;"] > a[aria-label="Money"] + b {
            color: var(--color-accent-green) !important;
            font-size: 17px;
            margin-right: 0px !important; /* Remove extra margin after money for compactness */
        }

        /* Adjust icon size */
        .informationbar img {
            width: 18px !important;
            height: 18px !important;
            vertical-align: middle;
            margin-right: 0px !important; /* Remove default margin from img */
        }

        /* Hover effects for resource items */
        .informationbar > span[style="float:right;"] > a:hover,
        .informationbar > span[style="float:right;"] > a:focus {
            color: var(--color-accent-blue) !important;
        }
        .informationbar > span[style="float:right;"] > a:hover + span,
        .informationbar > span[style="float:right;"] > a:hover + b,
        .informationbar > span[style="float:right;"] > a:hover + *:not(a) {
            color: var(--color-accent-blue) !important;
        }


        /* --- Mobile-Specific Infobar Adjustments (Sticky Bottom Bar) --- */
        @media (max-width: 768px) { /* Mobile breakpoint */
            .informationbar.col-xs-12 {
                position: fixed !important; /* Force fixed position */
                bottom: 0 !important; /* Stick to bottom */
                top: auto !important; /* Override top:0 */
                left: 0 !important; /* Full width */
                width: 100% !important;
                margin-bottom: 0 !important; /* No margin below */
                border-radius: 12px 12px 0 0 !important; /* Rounded top corners */
                border-bottom: none !important; /* No bottom border */
                border-top: 1px solid var(--color-border) !important; /* Add top border */
                padding: 5px 10px !important; /* More compact padding */
                justify-content: flex-start; /* Align contents to start for scrolling */
                overflow: hidden; /* Hide anything outside its bounds */
            }

            .informationbar > span[style="float:right;"] {
                overflow-x: auto !important; /* Enable horizontal scrolling for resources */
                -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
                flex-wrap: nowrap !important; /* Force resources onto one line */
                width: 100%; /* Take full width of the scrollable area */
                justify-content: flex-start; /* Align resources to the left in the scrollable area */
            }

            /* Adjust individual resource item appearance on mobile */
            .informationbar > span[style="float:right;"] > a {
                padding: 3px 5px; /* More compact for mobile touch */
                font-size: 13px; /* Slightly smaller font */
            }
            .informationbar > span[style="float:right;"] > a + span,
            .informationbar > span[style="float:right;"] > a + b,
            .informationbar > span[style="float:right;"] > a + *:not(a) {
                font-size: 14px; /* Adjust value size */
                margin-left: 3px; /* Tighter spacing */
                margin-right: 3px;
            }
            .informationbar img {
                width: 20px !important; /* Slightly larger icons for touch targets */
                height: 20px !important;
            }
            .informationbar > span[style="float:right;"] > a[aria-label="Money"] + b {
                font-size: 16px; /* Money value adjusted for mobile */
            }
        }
        /* --- End Infobar Redesign --- */


        .topnavigation {
            border-radius: 0 0 12px 12px !important;
            border: 1px solid var(--color-border) !important;
            border-top: none !important;
            padding: 15px 0;
        }
        .topnavigation .navbar-nav > li > a {
            color: var(--color-text-primary) !important;
            padding: 12px 18px !important;
            font-size: 1.05em;
            border-radius: 8px;
        }
        .topnavigation .navbar-nav > li > a:hover,
        .topnavigation .navbar-nav > li > a:focus {
            background-color: rgba(var(--color-accent-blue), 0.15) !important;
            color: var(--color-accent-blue) !important;
        }

        .topnavigation .dropdown-menu, .informationbar .dropdown-menu {
            background-color: var(--color-bg-card) !important;
            border: 1px solid var(--color-border) !important;
            border-radius: 10px;
            overflow: hidden;
        }
        .topnavigation .dropdown-menu > li > a, .informationbar .dropdown-menu > li > a {
            color: var(--color-text-primary) !important;
            padding: 10px 20px;
        }
        .topnavigation .dropdown-menu > li > a:hover, .informationbar .dropdown-menu > li > a:hover {
            background-color: var(--color-bg-header) !important;
            color: var(--color-accent-blue) !important;
        }

        #leftcolumn {
            padding-right: 20px !important;
        }

        ul.sidebar {
            background-color: var(--color-bg-card) !important;
            border: 1px solid var(--color-border) !important;
            border-radius: 12px !important;
            padding: 10px 0 !important;
            margin-bottom: 25px !important;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            position: relative;
        }
        ul.sidebar::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            border: 1px solid rgba(var(--color-accent-blue), 0.05);
            border-radius: 12px;
            pointer-events: none;
            z-index: 1;
        }

        ul.sidebar span[style*="font-weight:bold"],
        ul.sidebar span.bold {
            color: var(--color-accent-blue) !important;
            background: linear-gradient(to right, var(--color-bg-header), rgba(33,38,45,0)) !important;
            border-bottom: 1px solid var(--color-border) !important;
            font-size: 1.05em !important;
            font-weight: 700 !important;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            padding: 10px 20px !important;
            margin-bottom: 5px;
            display: block;
            cursor: default;
        }
        ul.sidebar span.bold:last-of-type {
            border-bottom: none;
        }

        ul.sidebar li {
            list-style: none !important;
            padding: 8px 20px !important;
            border-bottom: none !important;
            display: flex;
            align-items: center;
            transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
            position: relative;
            overflow: hidden;
        }
        ul.sidebar li:last-child {
            border-bottom: none !important;
        }
        ul.sidebar li:hover {
            background-color: rgba(var(--color-accent-blue), 0.08) !important;
            cursor: pointer;
        }

        ul.sidebar a {
            color: var(--color-text-primary) !important;
            text-decoration: none !important;
            flex-grow: 1;
            font-weight: 400;
            font-size: 0.95em;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        ul.sidebar a:hover {
            color: var(--color-text-light) !important;
        }

        .sidebar span.no-translate,
        .sidebar b {
            color: var(--color-accent-purple) !important;
            font-weight: 600 !important;
        }

        .sidebar img[data-toggle="tooltip"] {
            filter: brightness(1.1);
            width: 16px !important;
            height: 16px !important;
            vertical-align: middle;
            flex-shrink: 0;
            opacity: 0.7;
            transition: opacity 0.2s ease-in-out;
        }
        ul.sidebar li:hover img[data-toggle="tooltip"] {
            opacity: 1;
        }
        ul.sidebar li:before {
            content: none !important;
        }

        #rightcolumn {
            padding-left: 25px !important;
        }
        .columnheader {
            background: linear-gradient(to right, var(--color-bg-header), var(--color-border)) !important;
            color: var(--color-text-light) !important;
            border-radius: 12px !important;
            padding: 18px 25px !important;
            margin-bottom: 25px !important;
            border: 1px solid var(--color-border) !important;
            text-align: center;
            font-size: 1.4em;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .alert.alert-info, .hidden-xs.alert.alert-info {
            background-color: var(--color-bg-card) !important;
            border: 1px solid var(--color-border) !important;
            border-radius: 12px !important;
            color: var(--color-text-primary) !important;
            padding: 20px;
            margin-bottom: 25px;
            line-height: 1.6;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .alert.alert-info p {
            text-align: center;
            margin: 5px 0;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
        }
        .alert.alert-info p.bold {
            color: var(--color-accent-blue) !important;
            font-weight: 700 !important;
            font-size: 1.15em;
        }
        .alert.alert-info p a {
            color: var(--color-accent-blue) !important;
            text-decoration: none !important;
        }
        .alert.alert-info p a:hover {
            color: var(--color-accent-purple) !important;
            text-decoration: underline !important;
        }
        .alert.alert-info button.btn-ad-vote-header {
            background-color: var(--color-text-muted) !important;
            border: 1px solid var(--color-accent-blue) !important;
            color: var(--color-text-light) !important;
            padding: 8px 15px;
            border-radius: 8px;
            font-size: 0.95em;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        .alert.alert-info button.btn-ad-vote-header:hover {
            background-color: var(--color-accent-blue) !important;
            color: var(--color-bg-card) !important;
        }
        .alert.alert-info button.btn-ad-vote-header i {
            color: inherit;
        }
        .alert.alert-info img.img-responsive {
            width: 100% !important;
            max-width: 100% !important;
            height: auto;
            border-radius: 10px !important;
            margin-top: 15px !important;
        }

        /* Ensure help paragraphs are hidden by default */
        p.alert.alert-info.help,
        .uniqueidhelp
        {
            display: none !important;
        }


        .btn-group-justified {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 20px;
            margin-bottom: 20px;
        }
        .btn-group-justified .btn, .btn-group-justified .btn-default {
            flex-grow: 1;
            flex-basis: auto;
            min-width: 150px;
            padding: 12px 18px;
            font-size: 1.0em;
            text-align: center;
            border-radius: 8px;
            background-color: var(--color-bg-header) !important;
            color: var(--color-text-light) !important;
            border: 1px solid var(--color-border) !important;
            transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
        }

        .btn-group-justified .btn:hover,
        .btn-group-justified .btn-default:hover {
            background-color: var(--color-accent-blue) !important;
            color: var(--color-bg-card) !important;
            border-color: var(--color-accent-blue) !important;
        }

        .btn-group-justified .btn img,
        .btn-group-justified .btn-default img {
            filter: brightness(1.1) invert(0);
            transition: filter 0.2s ease-in-out;
        }
        .btn-group-justified .btn:hover img,
        .btn-group-justified .btn-default:hover img {
            filter: brightness(0) invert(1) !important;
        }

        .btn-group-justified .btn img { margin-right: 8px; }
        .btn-group.btn-group-xs.visible-xs { margin-top: 15px; gap: 8px; }
        .btn-group.btn-group-xs.visible-xs .btn { padding: 10px 15px; font-size: 0.9em; }

        /* --- nationtable Desktop Base Styling --- */
        table.nationtable {
            background-color: var(--color-bg-card) !important;
            border-radius: 15px !important;
            border: 1px solid var(--color-border) !important;
            margin-top: 30px;
            margin-bottom: 30px;
            overflow: hidden; /* Helps clip table content to rounded corners on desktop */
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        table.nationtable th {
            background: linear-gradient(to right, var(--color-bg-header), var(--color-border)) !important;
            color: var(--color-text-light) !important;
            padding: 18px 25px !important;
            font-size: 1.25em !important;
            border-bottom: 2px solid var(--color-accent-blue) !important;
            text-align: left !important;
            font-weight: 800 !important;
            text-transform: uppercase;
            letter-spacing: 1px;
            position: sticky; /* Keep headers sticky on vertical scroll */
            top: 0;
            z-index: 1;
        }
        /* Ensure the first row of headers has rounded corners */
        table.nationtable tr:first-child th:first-child { border-top-left-radius: 12px !important; }
        table.nationtable tr:first-child th:last-child { border-top-right-radius: 12px !important; }


        table.nationtable td {
            padding: 15px 25px !important;
            border-bottom: 1px solid rgba(var(--color-border), 0.5) !important;
            color: var(--color-text-primary) !important;
            vertical-align: middle;
        }

        table.nationtable tr:last-child td { border-bottom: none !important; }
        table.nationtable tbody tr:hover { background-color: var(--color-bg-header) !important; }

        /* Existing text alignment classes */
        table.nationtable .center { text-align: center !important; }
        table.nationtable .right { text-align: right !important; }

        /* Make flag images within table cells smaller and aligned */
        table.nationtable img.tinyflag {
            width: 20px !important;
            height: 12px !important;
            vertical-align: middle;
            margin-left: 5px;
            border-radius: 2px;
            object-fit: cover;
        }

        /* Specific styling for the 'Color' column image (if applicable) */
        table.nationtable td:nth-of-type(5) img[src*="colors/"] { /* Target color swatch specifically */
            width: 18px !important;
            height: 18px !important;
            border-radius: 50% !important;
            border: 1px solid var(--color-border);
        }

        /* --- Mobile-Specific nationtable Adjustments for Enhanced Horizontal Scrolling --- */
        @media (max-width: 768px) { /* Standard mobile breakpoint */
            /* Make the .pw-table wrapper scrollable horizontally */
            .pw-table {
                overflow-x: auto !important; /* Enable horizontal scrolling */
                -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
                width: 100% !important;
                /* Keep the border-radius, border, and box-shadow on the .pw-table container */
                border-radius: 15px !important; /* Retain border-radius for the scrollable area */
                border: 1px solid var(--color-border) !important;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                position: relative; /* For scroll shadows */
                /* Ensure its immediate children are not impacting the scrollability negatively */
                display: block; /* Make it a block container for overflow-x */
            }

            /* Remove table's own aesthetics if they duplicate the wrapper */
            table.nationtable {
                width: fit-content !important; /* Allow table to be wider than its container */
                min-width: 100% !important; /* Ensure table stretches to fill if content is small */
                border: none !important; /* Remove individual table border */
                box-shadow: none !important; /* Remove individual table shadow */
                border-radius: 0 !important; /* Remove individual table border-radius */
                border-spacing: 0; /* Keep cell spacing */
                border-collapse: separate; /* Keep separate for rounded th/td if desired */
            }

            /* Prevent text wrapping within cells on mobile to force horizontal scroll */
            table.nationtable th,
            table.nationtable td {
                white-space: nowrap !important; /* Critical: prevents text from wrapping */
                padding: 10px 15px !important; /* Slightly more compact padding */
                font-size: 0.9em !important; /* Slightly smaller font for more columns visibility */
                min-width: 70px; /* Minimum width for readability per column on small screens */
            }

            /* Sticky First Column (Rank/Nation/Leader) - VERY TRICKY, MAY NOT BE PERFECT ACROSS ALL TABLES */
            table.nationtable th:first-child,
            table.nationtable td:first-child {
                position: sticky !important;
                left: 0 !important;
                z-index: 2; /* Higher than regular table cells */
                background-color: var(--color-bg-header) !important; /* Ensure background is solid for sticky effect */
                box-shadow: 2px 0 5px rgba(0,0,0,0.2); /* Shadow to separate it from scrolling content */
            }

            /* Ensure rounded corners for the first sticky header are correct */
            table.nationtable tr:first-child th:first-child {
                border-top-left-radius: 12px !important;
                /* No border-bottom-left-radius: 0 needed here as it applies to the header row */
            }
            /* Add border-radius for the bottom-left of the *last* sticky cell in the tbody */
            table.nationtable tbody tr:last-child td:first-child {
                border-bottom-left-radius: 12px !important;
            }


            /* Adjust specific elements if their default behavior changes with nowrap/flex */
            /* For Nation/Leader column where content needs to wrap/stack */
            table.nationtable td:nth-child(2) {
                white-space: normal !important; /* Allow content to wrap within this cell */
                min-width: 150px; /* Give it more room as it has multiple lines */
            }
            table.nationtable td:nth-child(2) br { /* Force line break for Nation Name / Leader */
                display: block !important;
            }
            table.nationtable td:nth-child(2) a,
            table.nationtable td:nth-child(2) span {
                /* Ensure these components inside the cell align well when wrapped */
                display: inline-block !important; /* Keep as inline-block for side-by-side components */
            }

            /* Visual Scroll Indicators (Shadows) */
            .pw-table::before,
            .pw-table::after {
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                pointer-events: none;
                z-index: 2; /* Above table content */
                border-radius: 15px; /* Inherit the container's rounded corners */
            }

            /* Left shadow (subtle, always visible hint) */
            .pw-table::before {
                left: 0;
                width: 20px;
                background: linear-gradient(to right, rgba(0,0,0,0.4), transparent);
                opacity: 0.5; /* A subtle, consistent hint */
            }

            /* Right shadow (more prominent, always visible hint) */
            .pw-table::after {
                right: 0;
                width: 20px;
                background: linear-gradient(to left, rgba(0,0,0,0.4), transparent);
                opacity: 1; /* More prominent on the right side */
            }
        }
        /* --- End nationtable Redesign --- */

        /* General pw-table styles - applying to all tables wrapped in .pw-table */
        .pw-table th { /* This applies to desktop and mobile unless overridden */
            background: linear-gradient(to right, var(--color-bg-header), var(--color-border)) !important;
            color: var(--color-text-light) !important;
            font-weight: 700 !important;
        }

        .pw-table td {
            color: var(--color-text-primary) !important;
        }

        .pw-table tbody tr:hover {
            background-color: var(--color-bg-header) !important;
        }

        .pw-table-highlight-first tr td:first-child,
        .pw-table-bold-first tr td:first-child {
            font-weight: 600 !important;
            color: var(--color-text-light) !important;
        }
        .pw-table-text-zinc {
            color: var(--color-text-primary) !important;
        }
        .pw-table-alternate-main tbody tr:nth-child(even) {
            background-color: rgba(var(--color-bg-header), 0.3) !important;
        }
        .pw-table-alternate-main tbody tr:nth-child(odd) {
            background-color: transparent !important;
        }

        .pw-table tr.font-bold td {
            font-weight: 700 !important;
            color: var(--color-accent-blue) !important;
            background-color: rgba(var(--color-accent-blue), 0.1) !important;
            font-size: 1.05em;
        }
        .pw-table tr.font-bold td:first-child {
            color: var(--color-text-light) !important;
        }
        .pw-table tr.font-bold:last-of-type td {
            color: var(--color-accent-green) !important;
            background-color: rgba(var(--color-accent-green), 0.1) !important;
        }
        .pw-table tr.font-bold:last-of-type td:first-child {
            color: var(--color-text-light) !important;
        }

        .pw-table .text-right {
            text-align: right !important;
        }
        .pw-table .text-sm.italic {
            font-size: 0.85em !important;
            font-style: italic !important;
            color: var(--color-text-muted) !important;
        }
        .pw-table img[style*="height:16px"] {
            vertical-align: middle;
            margin-right: 5px;
        }

        .pw-table p.text-justify.text-sm {
            background-color: var(--color-bg-header);
            padding: 15px 20px;
            margin: 0 !important;
            border-top: 1px solid var(--color-border) !important;
            border-radius: 0 0 12px 12px;
            font-size: 0.9em !important;
            line-height: 1.5;
            color: var(--color-text-primary) !important;
            text-align: left !important;
        }
        .pw-table p.text-justify {
            text-align: left !important;
        }

        .grid.grid-cols-1.md\\:grid-cols-2.xl\\:grid-cols-3 {
            background-color: transparent !important;
            padding: 15px !important;
        }

        .pw-card.p-0 {
            background-color: var(--color-bg-card) !important;
            border: 1px solid var(--color-border) !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
        }

        .pw-card h2.text-lg.font-bold {
            color: var(--color-text-light) !important;
        }

        .pw-card hr {
            border-top: 1px solid rgba(var(--color-border), 0.5) !important;
        }

        .pw-card table {
            color: var(--color-text-primary) !important;
        }
        .pw-card table td {
            color: var(--color-text-primary) !important;
            padding: 8px 0 !important;
            font-size: 0.95em !important;
        }
        .pw-card table img {
            filter: brightness(1.1);
            vertical-align: middle;
            margin-right: 5px;
            width: 16px !important;
            height: 16px !important;
        }

        .pw-card table td > div > div:last-child {
            color: var(--color-text-light) !important;
            font-weight: 600 !important;
        }

        .pw-card .w-full.h-5.bg-zinc-200,
        .pw-card .dark\\:bg-zinc-700 {
            background-color: var(--color-border) !important;
        }

        .pw-card .bg-red-400, .pw-card .dark\\:bg-red-600 {
            background-color: var(--color-red-600) !important;
        }
        .pw-card .bg-emerald-400, .pw-card .dark\\:bg-emerald-600 {
            background-color: var(--color-emerald-600) !important;
        }

        .pw-card .absolute.text-xs.font-bold.items-center.justify-center.flex.leading-none.px-2.h-full {
            color: var(--color-text-light) !important;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }
        .pw-card .pw-title-xs {
            color: var(--color-text-primary) !important;
            font-weight: 600 !important;
        }

        .pw-card .pw-btn-text-white {
            color: var(--color-text-light) !important;
        }
        .pw-card .pw-btn-red {
            background-color: var(--color-red-600) !important;
            border-color: var(--color-red-600) !important;
        }
        .pw-card .pw-btn-red:hover {
            background-color: var(--color-red-400) !important;
        }
        .pw-card .pw-btn-green {
            background-color: var(--color-emerald-600) !important;
            border-color: var(--color-emerald-600) !important;
        }
        .pw-card .pw-btn-green:hover {
            background-color: var(--color-emerald-400) !important;
        }
        .pw-card .pw-btn svg {
            stroke: currentColor !important;
            fill: none !important;
        }
        .pw-card .pw-btn-text-white svg {
            color: var(--color-text-light) !important;
            stroke: var(--color-text-light) !important;
        }
        .pw-card .pw-btn-red svg {
             color: var(--color-text-light) !important;
             stroke: var(--color-text-light) !important;
        }
        .pw-card .pw-btn-green svg {
             color: var(--color-text-light) !important;
             stroke: var(--color-text-light) !important;
        }

        .pw-card input[type="text"] {
            background-color: var(--color-bg-header) !important;
            color: var(--color-text-primary) !important;
            border: 1px solid var(--color-border) !important;
            border-radius: 6px !important;
            padding: 8px 12px !important;
            font-size: 0.95em !important;
            width: auto !important;
        }
        .pw-card input[type="text"]::placeholder {
            color: var(--color-text-muted) !important;
        }

        #footer {
            background-color: var(--color-bg-card) !important;
            border-top: 1px solid var(--color-border) !important;
            padding: 40px 20px;
            margin-top: 40px;
            border-radius: 15px 15px 0 0;
            color: var(--color-text-primary);
            text-align: center;
        }
        #footer p, #footer a {
            color: var(--color-text-primary) !important;
            font-size: 0.95em;
            line-height: 1.8;
        }
        #footer a:hover {
            color: var(--color-accent-blue) !important;
            text-decoration: underline;
        }
        #footer .language_widget {
            margin-top: 20px;
        }
        #footer .language_widget p.bold {
            color: var(--color-accent-blue) !important;
            font-weight: 700;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        #footer select {
            background-color: var(--color-bg-header) !important;
            color: var(--color-text-primary) !important;
            border: 1px solid var(--color-border) !important;
            border-radius: 8px;
            padding: 8px 12px;
            font-size: 0.9em;
            appearance: none;
            background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23c9d1d9%22%20d%3D%22M287%2C114.3L146.2%2C255.1L5.4%2C114.3c-2.7-2.7-2.7-7.2%2C0-9.9s7.2-2.7%2C9.9%2C0l130.1%2C130.1l130.1-130.1c2.7-2.7%2C7.2-2.7%2C9.9%2C0S289.7%2C111.6%2C287%2C114.3z%22%2F%3E%3C%2Fsvg%3E');
            background-repeat: no-repeat;
            background-position: right 10px center;
            background-size: 12px;
        }
        #footer select:focus {
            border-color: var(--color-accent-blue) !important;
            outline: none;
        }
        #footer .col-xs-12, #footer .col-md-4 {
            margin-bottom: 20px;
        }
        @media (min-width: 768px) {
            #footer .col-md-4 {
                margin-bottom: 0;
            }
        }

        .mobileLinkBar {
            background-color: var(--color-bg-card) !important;
            border: 1px solid var(--color-border) !important;
            border-radius: 0 0 12px 12px !important;
            padding: 10px 0;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .mobileLinkBar-fixed {
            background-color: var(--color-bg-card) !important;
            border: 1px solid var(--color-border) !important;
            border-top: none !important;
            border-radius: 0 0 12px 12px !important;
            padding: 8px 0;
        }
        .mobileLinkBarButton {
            color: var(--color-text-primary) !important;
            padding: 5px 0;
            font-size: 0.9em;
        }
        .mobileLinkBarButton:hover {
            color: var(--color-accent-blue) !important;
        }
        .mobileLinkBarButton i {
            color: var(--color-accent-blue) !important;
            font-size: 1.5em;
            margin-bottom: 5px;
        }
        .mobileMenuSmallText {
            font-size: 0.75em;
            font-weight: 500;
            color: var(--color-text-muted);
        }
        .mobileLinkBarButton:hover .mobileMenuSmallText {
            color: var(--color-text-light);
        }

        .logo img {
            margin: 25px auto 10px auto;
        }
        #header {
            margin-bottom: 0 !important;
        }

        .tooltip {
            z-index: 100000 !important;
            pointer-events: none !important;
        }
        /* Specific tooltip styles from your original script */
        .tooltip-inner {
            background-color: var(--color-bg-header) !important;
            color: var(--color-text-light) !important;
            border-radius: 8px !important;
            padding: 8px 12px !important;
            font-size: 0.9em !important;
            line-height: 1.4 !important;
            border: 1px solid var(--color-border) !important;
        }

        .tooltip.top .tooltip-arrow {
            border-top-color: var(--color-bg-header) !important;
        }
        .tooltip.top .tooltip-arrow:before {
            border-top-color: var(--color-border) !important;
        }

        .tooltip.right .tooltip-arrow {
            border-right-color: var(--color-bg-header) !important;
        }
        .tooltip.right .tooltip-arrow:before {
            border-right-color: var(--color-border) !important;
        }

        .tooltip.bottom .tooltip-arrow {
            border-bottom-color: var(--color-bg-header) !important;
        }
        .tooltip.bottom .tooltip-arrow:before {
            border-bottom-color: var(--color-border) !important;
        }

        .tooltip.left .tooltip-arrow {
            border-left-color: var(--color-bg-header) !important;
        }
        .tooltip.left .tooltip-arrow:before {
            border-left-color: var(--color-border) !important;
        }

        /* General Overflow Overrides to prevent clipping of tooltips/popovers */
        body > div,
        body > div > div,
        .row,
        [class*="col-"],
        .panel, .panel-body, .box, .box-body, .widget, .card, .pw-card,
        [id*="content"], [class*="content-"]
        {
             overflow: visible !important;
        }
    `);
})();
